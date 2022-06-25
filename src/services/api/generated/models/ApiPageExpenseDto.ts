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
import type { ExpenseDto } from './ExpenseDto';
import {
    ExpenseDtoFromJSON,
    ExpenseDtoFromJSONTyped,
    ExpenseDtoToJSON,
} from './ExpenseDto';

/**
 * 
 * @export
 * @interface ApiPageExpenseDto
 */
export interface ApiPageExpenseDto {
    /**
     * 
     * @type {number}
     * @memberof ApiPageExpenseDto
     */
    pageNumber: number;
    /**
     * 
     * @type {number}
     * @memberof ApiPageExpenseDto
     */
    pageSize: number;
    /**
     * 
     * @type {number}
     * @memberof ApiPageExpenseDto
     */
    totalElements: number;
    /**
     * 
     * @type {Array<ExpenseDto>}
     * @memberof ApiPageExpenseDto
     */
    data: Array<ExpenseDto>;
}

export function ApiPageExpenseDtoFromJSON(json: any): ApiPageExpenseDto {
    return ApiPageExpenseDtoFromJSONTyped(json, false);
}

export function ApiPageExpenseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApiPageExpenseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageNumber': json['pageNumber'],
        'pageSize': json['pageSize'],
        'totalElements': json['totalElements'],
        'data': ((json['data'] as Array<any>).map(ExpenseDtoFromJSON)),
    };
}

export function ApiPageExpenseDtoToJSON(value?: ApiPageExpenseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageNumber': value.pageNumber,
        'pageSize': value.pageSize,
        'totalElements': value.totalElements,
        'data': ((value.data as Array<any>).map(ExpenseDtoToJSON)),
    };
}

