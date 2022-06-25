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
/**
 * 
 * @export
 * @interface FinalizedTaxSummaryItemDto
 */
export interface FinalizedTaxSummaryItemDto {
    /**
     * 
     * @type {number}
     * @memberof FinalizedTaxSummaryItemDto
     */
    tax: number;
    /**
     * 
     * @type {number}
     * @memberof FinalizedTaxSummaryItemDto
     */
    taxAmount: number;
    /**
     * 
     * @type {number}
     * @memberof FinalizedTaxSummaryItemDto
     */
    includedItemsNumber: number;
    /**
     * 
     * @type {number}
     * @memberof FinalizedTaxSummaryItemDto
     */
    includedItemsAmount: number;
}

export function FinalizedTaxSummaryItemDtoFromJSON(json: any): FinalizedTaxSummaryItemDto {
    return FinalizedTaxSummaryItemDtoFromJSONTyped(json, false);
}

export function FinalizedTaxSummaryItemDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinalizedTaxSummaryItemDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tax': json['tax'],
        'taxAmount': json['taxAmount'],
        'includedItemsNumber': json['includedItemsNumber'],
        'includedItemsAmount': json['includedItemsAmount'],
    };
}

export function FinalizedTaxSummaryItemDtoToJSON(value?: FinalizedTaxSummaryItemDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tax': value.tax,
        'taxAmount': value.taxAmount,
        'includedItemsNumber': value.includedItemsNumber,
        'includedItemsAmount': value.includedItemsAmount,
    };
}

