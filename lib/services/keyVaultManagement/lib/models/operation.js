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
 * Key Vault REST API operation definition.
 *
 */
class Operation {
  /**
   * Create a Operation.
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   * @member {object} [display] Display metadata associated with the operation.
   * @member {string} [display.provider] Service provider: Microsoft Key Vault.
   * @member {string} [display.resource] Resource on which the operation is
   * performed etc.
   * @member {string} [display.operation] Type of operation: get, read, delete,
   * etc.
   * @member {string} [display.description] Decription of operation.
   * @member {string} [origin] The origin of operations.
   * @member {object} [serviceSpecification] One property of operation, include
   * metric specifications.
   * @member {array} [serviceSpecification.logSpecifications] Log
   * specifications of operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Operation
   *
   * @returns {object} metadata of Operation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Operation',
      type: {
        name: 'Composite',
        className: 'Operation',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          display: {
            required: false,
            serializedName: 'display',
            type: {
              name: 'Composite',
              className: 'OperationDisplay'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          serviceSpecification: {
            required: false,
            serializedName: 'properties.serviceSpecification',
            type: {
              name: 'Composite',
              className: 'ServiceSpecification'
            }
          }
        }
      }
    };
  }
}

module.exports = Operation;
