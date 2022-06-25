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
 * @interface GeneralTaxDto
 */
export interface GeneralTaxDto {
    /**
     * 
     * @type {string}
     * @memberof GeneralTaxDto
     */
    title: string;
    /**
     * 
     * @type {number}
     * @memberof GeneralTaxDto
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof GeneralTaxDto
     */
    version: number;
    /**
     * 
     * @type {string}
     * @memberof GeneralTaxDto
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof GeneralTaxDto
     */
    rateInBps: number;
}

export function GeneralTaxDtoFromJSON(json: any): GeneralTaxDto {
    return GeneralTaxDtoFromJSONTyped(json, false);
}

export function GeneralTaxDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneralTaxDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': json['title'],
        'id': json['id'],
        'version': json['version'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'rateInBps': json['rateInBps'],
    };
}

export function GeneralTaxDtoToJSON(value?: GeneralTaxDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'id': value.id,
        'version': value.version,
        'description': value.description,
        'rateInBps': value.rateInBps,
    };
}

