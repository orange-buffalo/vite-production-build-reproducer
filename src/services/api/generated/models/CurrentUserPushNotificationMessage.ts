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
 * @interface CurrentUserPushNotificationMessage
 */
export interface CurrentUserPushNotificationMessage {
    /**
     * 
     * @type {string}
     * @memberof CurrentUserPushNotificationMessage
     */
    eventName: string;
    /**
     * 
     * @type {object}
     * @memberof CurrentUserPushNotificationMessage
     */
    data?: object;
}

export function CurrentUserPushNotificationMessageFromJSON(json: any): CurrentUserPushNotificationMessage {
    return CurrentUserPushNotificationMessageFromJSONTyped(json, false);
}

export function CurrentUserPushNotificationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentUserPushNotificationMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventName': json['eventName'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CurrentUserPushNotificationMessageToJSON(value?: CurrentUserPushNotificationMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eventName': value.eventName,
        'data': value.data,
    };
}
