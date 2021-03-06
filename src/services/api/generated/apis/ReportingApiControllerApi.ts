/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  GeneralTaxReportDto,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GeneralTaxReportDtoFromJSON,
    GeneralTaxReportDtoToJSON,
} from '../models';

export interface GetGeneralTaxReportRequest {
    workspaceId: number;
    fromDate: Date;
    toDate: Date;
}

/**
 * 
 */
export class ReportingApiControllerApi extends runtime.BaseAPI {

    /**
     */
    async getGeneralTaxReportRaw(requestParameters: GetGeneralTaxReportRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GeneralTaxReportDto>> {
        if (requestParameters.workspaceId === null || requestParameters.workspaceId === undefined) {
            throw new runtime.RequiredError('workspaceId','Required parameter requestParameters.workspaceId was null or undefined when calling getGeneralTaxReport.');
        }

        if (requestParameters.fromDate === null || requestParameters.fromDate === undefined) {
            throw new runtime.RequiredError('fromDate','Required parameter requestParameters.fromDate was null or undefined when calling getGeneralTaxReport.');
        }

        if (requestParameters.toDate === null || requestParameters.toDate === undefined) {
            throw new runtime.RequiredError('toDate','Required parameter requestParameters.toDate was null or undefined when calling getGeneralTaxReport.');
        }

        const queryParameters: any = {};

        if (requestParameters.fromDate !== undefined) {
            queryParameters['fromDate'] = (requestParameters.fromDate as any).toISOString().substr(0,10);
        }

        if (requestParameters.toDate !== undefined) {
            queryParameters['toDate'] = (requestParameters.toDate as any).toISOString().substr(0,10);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/workspaces/{workspaceId}/reporting/general-taxes`.replace(`{${"workspaceId"}}`, encodeURIComponent(String(requestParameters.workspaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GeneralTaxReportDtoFromJSON(jsonValue));
    }

    /**
     */
    async getGeneralTaxReport(requestParameters: GetGeneralTaxReportRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GeneralTaxReportDto> {
        const response = await this.getGeneralTaxReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
