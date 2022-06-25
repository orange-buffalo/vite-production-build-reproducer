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
 * @interface CustomerDto
 */
export interface CustomerDto {
    /**
     * 
     * @type {string}
     * @memberof CustomerDto
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerDto
     */
    id: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerDto
     */
    version: number;
}

export function CustomerDtoFromJSON(json: any): CustomerDto {
    return CustomerDtoFromJSONTyped(json, false);
}

export function CustomerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'id': json['id'],
        'version': json['version'],
    };
}

export function CustomerDtoToJSON(value?: CustomerDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'id': value.id,
        'version': value.version,
    };
}

