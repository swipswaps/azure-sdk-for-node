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

/**
 * Details about connectivity to a resource.
 *
 */
class ConnectivityStatusContract {
  /**
   * Create a ConnectivityStatusContract.
   * @property {string} name The hostname of the resource which the service
   * depends on. This can be the database, storage or any other azure resource
   * on which the service depends upon.
   * @property {string} status Resource Connectivity Status Type identifier.
   * Possible values include: 'initializing', 'success', 'failure'
   * @property {string} [error] Error details of the connectivity to the
   * resource.
   * @property {date} lastUpdated The date when the resource connectivity
   * status was last updated. This status should be updated every 15 minutes.
   * If this status has not been updated, then it means that the service has
   * lost network connectivity to the resource, from inside the Virtual
   * Network.The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ`
   * as specified by the ISO 8601 standard.
   * @property {date} lastStatusChange The date when the resource connectivity
   * status last Changed from success to failure or vice-versa. The date
   * conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by
   * the ISO 8601 standard.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ConnectivityStatusContract
   *
   * @returns {object} metadata of ConnectivityStatusContract
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConnectivityStatusContract',
      type: {
        name: 'Composite',
        className: 'ConnectivityStatusContract',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          },
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'String'
            }
          },
          lastUpdated: {
            required: true,
            serializedName: 'lastUpdated',
            type: {
              name: 'DateTime'
            }
          },
          lastStatusChange: {
            required: true,
            serializedName: 'lastStatusChange',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = ConnectivityStatusContract;
