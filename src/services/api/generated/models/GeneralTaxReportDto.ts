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

import { exists, mapValues } from '../runtime';
import type { FinalizedTaxSummaryItemDto } from './FinalizedTaxSummaryItemDto';
import {
    FinalizedTaxSummaryItemDtoFromJSON,
    FinalizedTaxSummaryItemDtoFromJSONTyped,
    FinalizedTaxSummaryItemDtoToJSON,
} from './FinalizedTaxSummaryItemDto';
import type { PendingTaxSummaryItemDto } from './PendingTaxSummaryItemDto';
import {
    PendingTaxSummaryItemDtoFromJSON,
    PendingTaxSummaryItemDtoFromJSONTyped,
    PendingTaxSummaryItemDtoToJSON,
} from './PendingTaxSummaryItemDto';

/**
 * 
 * @export
 * @interface GeneralTaxReportDto
 */
export interface GeneralTaxReportDto {
    /**
     * 
     * @type {Array<FinalizedTaxSummaryItemDto>}
     * @memberof GeneralTaxReportDto
     */
    finalizedCollectedTaxes: Array<FinalizedTaxSummaryItemDto>;
    /**
     * 
     * @type {Array<FinalizedTaxSummaryItemDto>}
     * @memberof GeneralTaxReportDto
     */
    finalizedPaidTaxes: Array<FinalizedTaxSummaryItemDto>;
    /**
     * 
     * @type {Array<PendingTaxSummaryItemDto>}
     * @memberof GeneralTaxReportDto
     */
    pendingCollectedTaxes: Array<PendingTaxSummaryItemDto>;
    /**
     * 
     * @type {Array<PendingTaxSummaryItemDto>}
     * @memberof GeneralTaxReportDto
     */
    pendingPaidTaxes: Array<PendingTaxSummaryItemDto>;
}

export function GeneralTaxReportDtoFromJSON(json: any): GeneralTaxReportDto {
    return GeneralTaxReportDtoFromJSONTyped(json, false);
}

export function GeneralTaxReportDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralTaxReportDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'finalizedCollectedTaxes': ((json['finalizedCollectedTaxes'] as Array<any>).map(FinalizedTaxSummaryItemDtoFromJSON)),
        'finalizedPaidTaxes': ((json['finalizedPaidTaxes'] as Array<any>).map(FinalizedTaxSummaryItemDtoFromJSON)),
        'pendingCollectedTaxes': ((json['pendingCollectedTaxes'] as Array<any>).map(PendingTaxSummaryItemDtoFromJSON)),
        'pendingPaidTaxes': ((json['pendingPaidTaxes'] as Array<any>).map(PendingTaxSummaryItemDtoFromJSON)),
    };
}

export function GeneralTaxReportDtoToJSON(value?: GeneralTaxReportDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'finalizedCollectedTaxes': ((value.finalizedCollectedTaxes as Array<any>).map(FinalizedTaxSummaryItemDtoToJSON)),
        'finalizedPaidTaxes': ((value.finalizedPaidTaxes as Array<any>).map(FinalizedTaxSummaryItemDtoToJSON)),
        'pendingCollectedTaxes': ((value.pendingCollectedTaxes as Array<any>).map(PendingTaxSummaryItemDtoToJSON)),
        'pendingPaidTaxes': ((value.pendingPaidTaxes as Array<any>).map(PendingTaxSummaryItemDtoToJSON)),
    };
}
