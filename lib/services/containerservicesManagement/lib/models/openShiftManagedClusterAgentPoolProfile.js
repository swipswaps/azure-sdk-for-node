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
 * Defines the configuration of the OpenShift cluster VMs.
 *
 */
class OpenShiftManagedClusterAgentPoolProfile {
  /**
   * Create a OpenShiftManagedClusterAgentPoolProfile.
   * @property {string} name Unique name of the pool profile in the context of
   * the subscription and resource group.
   * @property {number} count Number of agents (VMs) to host docker containers.
   * @property {string} vmSize Size of agent VMs. Possible values include:
   * 'Standard_D2s_v3', 'Standard_D4s_v3', 'Standard_D8s_v3',
   * 'Standard_D16s_v3', 'Standard_D32s_v3', 'Standard_D64s_v3',
   * 'Standard_DS4_v2', 'Standard_DS5_v2', 'Standard_F8s_v2',
   * 'Standard_F16s_v2', 'Standard_F32s_v2', 'Standard_F64s_v2',
   * 'Standard_F72s_v2', 'Standard_F8s', 'Standard_F16s', 'Standard_E4s_v3',
   * 'Standard_E8s_v3', 'Standard_E16s_v3', 'Standard_E20s_v3',
   * 'Standard_E32s_v3', 'Standard_E64s_v3', 'Standard_GS2', 'Standard_GS3',
   * 'Standard_GS4', 'Standard_GS5', 'Standard_DS12_v2', 'Standard_DS13_v2',
   * 'Standard_DS14_v2', 'Standard_DS15_v2', 'Standard_L4s', 'Standard_L8s',
   * 'Standard_L16s', 'Standard_L32s'
   * @property {string} [subnetCidr] Subnet CIDR for the peering. Default
   * value: '10.0.0.0/24' .
   * @property {string} [osType] OsType to be used to specify os type. Choose
   * from Linux and Windows. Default to Linux. Possible values include:
   * 'Linux', 'Windows'. Default value: 'Linux' .
   * @property {string} [role] Define the role of the AgentPoolProfile.
   * Possible values include: 'compute', 'infra'
   */
  constructor() {
  }

  /**
   * Defines the metadata of OpenShiftManagedClusterAgentPoolProfile
   *
   * @returns {object} metadata of OpenShiftManagedClusterAgentPoolProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OpenShiftManagedClusterAgentPoolProfile',
      type: {
        name: 'Composite',
        className: 'OpenShiftManagedClusterAgentPoolProfile',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          count: {
            required: true,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          vmSize: {
            required: true,
            serializedName: 'vmSize',
            type: {
              name: 'String'
            }
          },
          subnetCidr: {
            required: false,
            serializedName: 'subnetCidr',
            defaultValue: '10.0.0.0/24',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: false,
            serializedName: 'osType',
            defaultValue: 'Linux',
            type: {
              name: 'String'
            }
          },
          role: {
            required: false,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OpenShiftManagedClusterAgentPoolProfile;
