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
 * Defines the Identity provider for MS AAD.
 *
 * @extends models['OpenShiftManagedClusterBaseIdentityProvider']
 */
class OpenShiftManagedClusterAADIdentityProvider extends models['OpenShiftManagedClusterBaseIdentityProvider'] {
  /**
   * Create a OpenShiftManagedClusterAADIdentityProvider.
   * @property {string} [clientId] The clientId password associated with the
   * provider.
   * @property {string} [secret] The secret password associated with the
   * provider.
   * @property {string} [tenantId] The tenantId associated with the provider.
   * @property {string} [customerAdminGroupId] The groupId to be granted
   * cluster admin role.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OpenShiftManagedClusterAADIdentityProvider
   *
   * @returns {object} metadata of OpenShiftManagedClusterAADIdentityProvider
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AADIdentityProvider',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'kind',
          clientName: 'kind'
        },
        uberParent: 'OpenShiftManagedClusterBaseIdentityProvider',
        className: 'OpenShiftManagedClusterAADIdentityProvider',
        modelProperties: {
          kind: {
            required: true,
            serializedName: 'kind',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          clientId: {
            required: false,
            serializedName: 'clientId',
            type: {
              name: 'String'
            }
          },
          secret: {
            required: false,
            serializedName: 'secret',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          },
          customerAdminGroupId: {
            required: false,
            serializedName: 'customerAdminGroupId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OpenShiftManagedClusterAADIdentityProvider;
