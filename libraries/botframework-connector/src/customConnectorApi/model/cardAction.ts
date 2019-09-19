/**
 * Microsoft Bot Connector API - v3.0
 * The Bot Connector REST API allows your bot to send and receive messages to channels configured in the  [Bot Framework Developer Portal](https://dev.botframework.com). The Connector service uses industry-standard REST  and JSON over HTTPS.    Client libraries for this REST API are available. See below for a list.    Many bots will use both the Bot Connector REST API and the associated [Bot State REST API](/en-us/restapi/state). The  Bot State REST API allows a bot to store and retrieve state associated with users and conversations.    Authentication for both the Bot Connector and Bot State REST APIs is accomplished with JWT Bearer tokens, and is  described in detail in the [Connector Authentication](/en-us/restapi/authentication) document.    # Client Libraries for the Bot Connector REST API    * [Bot Builder for C#](/en-us/csharp/builder/sdkreference/)  * [Bot Builder for Node.js](/en-us/node/builder/overview/)  * Generate your own from the [Connector API Swagger file](https://raw.githubusercontent.com/Microsoft/BotBuilder/master/CSharp/Library/Microsoft.Bot.Connector.Shared/Swagger/ConnectorAPI.json)    © 2016 Microsoft
 *
 * The version of the OpenAPI document: v3
 * Contact: botframework@microsoft.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionTypes } from './actionTypes';

/**
* A clickable action
*/
export class CardAction {
    'type'?: ActionTypes;
    /**
    * Text description which appears on the button
    */
    'title'?: string;
    /**
    * Image URL which will appear on the button, next to text label
    */
    'image'?: string;
    /**
    * Text for this action
    */
    'text'?: string;
    /**
    * (Optional) text to display in the chat feed if the button is clicked
    */
    'displayText'?: string;
    /**
    * Supplementary parameter for action. Content of this property depends on the ActionType
    */
    'value'?: object;
    /**
    * Channel-specific data associated with this action
    */
    'channelData'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ActionTypes"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string"
        },
        {
            "name": "displayText",
            "baseName": "displayText",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        },
        {
            "name": "channelData",
            "baseName": "channelData",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return CardAction.attributeTypeMap;
    }
}
