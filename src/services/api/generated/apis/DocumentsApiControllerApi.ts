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
  ApiPageDocumentDto,
  DocumentDto,
  ErrorResponse,
  GetDownloadTokenResponse,
} from '../models';
import {
    ApiPageDocumentDtoFromJSON,
    ApiPageDocumentDtoToJSON,
    DocumentDtoFromJSON,
    DocumentDtoToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GetDownloadTokenResponseFromJSON,
    GetDownloadTokenResponseToJSON,
} from '../models';

export interface GetDocumentContentRequest {
    workspaceId: number;
    documentId: number;
}

export interface GetDocumentsRequest {
    workspaceId: number;
}

export interface GetDownloadTokenRequest {
    workspaceId: number;
    documentId: number;
}

export interface UploadNewDocumentRequest {
    workspaceId: number;
    file: Blob;
}

/**
 * 
 */
export class DocumentsApiControllerApi extends runtime.BaseAPI {

    /**
     */
    async getDocumentContentRaw(requestParameters: GetDocumentContentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<object>>> {
        if (requestParameters.workspaceId === null || requestParameters.workspaceId === undefined) {
            throw new runtime.RequiredError('workspaceId','Required parameter requestParameters.workspaceId was null or undefined when calling getDocumentContent.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling getDocumentContent.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/workspaces/{workspaceId}/documents/{documentId}/content`.replace(`{${"workspaceId"}}`, encodeURIComponent(String(requestParameters.workspaceId))).replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async getDocumentContent(requestParameters: GetDocumentContentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<object>> {
        const response = await this.getDocumentContentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getDocumentsRaw(requestParameters: GetDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ApiPageDocumentDto>> {
        if (requestParameters.workspaceId === null || requestParameters.workspaceId === undefined) {
            throw new runtime.RequiredError('workspaceId','Required parameter requestParameters.workspaceId was null or undefined when calling getDocuments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/workspaces/{workspaceId}/documents`.replace(`{${"workspaceId"}}`, encodeURIComponent(String(requestParameters.workspaceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApiPageDocumentDtoFromJSON(jsonValue));
    }

    /**
     */
    async getDocuments(requestParameters: GetDocumentsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ApiPageDocumentDto> {
        const response = await this.getDocumentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getDownloadTokenRaw(requestParameters: GetDownloadTokenRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<GetDownloadTokenResponse>> {
        if (requestParameters.workspaceId === null || requestParameters.workspaceId === undefined) {
            throw new runtime.RequiredError('workspaceId','Required parameter requestParameters.workspaceId was null or undefined when calling getDownloadToken.');
        }

        if (requestParameters.documentId === null || requestParameters.documentId === undefined) {
            throw new runtime.RequiredError('documentId','Required parameter requestParameters.documentId was null or undefined when calling getDownloadToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/workspaces/{workspaceId}/documents/{documentId}/download-token`.replace(`{${"workspaceId"}}`, encodeURIComponent(String(requestParameters.workspaceId))).replace(`{${"documentId"}}`, encodeURIComponent(String(requestParameters.documentId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetDownloadTokenResponseFromJSON(jsonValue));
    }

    /**
     */
    async getDownloadToken(requestParameters: GetDownloadTokenRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<GetDownloadTokenResponse> {
        const response = await this.getDownloadTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async uploadNewDocumentRaw(requestParameters: UploadNewDocumentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<DocumentDto>> {
        if (requestParameters.workspaceId === null || requestParameters.workspaceId === undefined) {
            throw new runtime.RequiredError('workspaceId','Required parameter requestParameters.workspaceId was null or undefined when calling uploadNewDocument.');
        }

        if (requestParameters.file === null || requestParameters.file === undefined) {
            throw new runtime.RequiredError('file','Required parameter requestParameters.file was null or undefined when calling uploadNewDocument.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        const response = await this.request({
            path: `/api/workspaces/{workspaceId}/documents`.replace(`{${"workspaceId"}}`, encodeURIComponent(String(requestParameters.workspaceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocumentDtoFromJSON(jsonValue));
    }

    /**
     */
    async uploadNewDocument(requestParameters: UploadNewDocumentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<DocumentDto> {
        const response = await this.uploadNewDocumentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
