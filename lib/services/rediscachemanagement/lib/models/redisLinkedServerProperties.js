/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Properties of a linked server to be returned in get/put response
 *
 * @extends models['RedisLinkedServerCreateProperties']
 */
class RedisLinkedServerProperties extends models['RedisLinkedServerCreateProperties'] {
  /**
   * Create a RedisLinkedServerProperties.
   * @property {string} [provisioningState] Terminal state of the link between
   * primary and secondary redis cache.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RedisLinkedServerProperties
   *
   * @returns {object} metadata of RedisLinkedServerProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisLinkedServerProperties',
      type: {
        name: 'Composite',
        className: 'RedisLinkedServerProperties',
        modelProperties: {
          linkedRedisCacheId: {
            required: true,
            serializedName: 'linkedRedisCacheId',
            type: {
              name: 'String'
            }
          },
          linkedRedisCacheLocation: {
            required: true,
            serializedName: 'linkedRedisCacheLocation',
            type: {
              name: 'String'
            }
          },
          serverRole: {
            required: true,
            serializedName: 'serverRole',
            type: {
              name: 'Enum',
              allowedValues: [ 'Primary', 'Secondary' ]
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RedisLinkedServerProperties;