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
 * Describes the storage location for a packet capture session.
 *
 */
class PacketCaptureStorageLocation {
  /**
   * Create a PacketCaptureStorageLocation.
   * @member {string} [storageId] The ID of the storage account to save the
   * packet capture session. Required if no local file path is provided.
   * @member {string} [storagePath] The URI of the storage path to save the
   * packet capture. Must be a well-formed URI describing the location to save
   * the packet capture.
   * @member {string} [filePath] A valid local path on the targeting VM. Must
   * include the name of the capture file (*.cap). For linux virtual machine it
   * must start with /var/captures. Required if no storage ID is provided,
   * otherwise optional.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PacketCaptureStorageLocation
   *
   * @returns {object} metadata of PacketCaptureStorageLocation
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PacketCaptureStorageLocation',
      type: {
        name: 'Composite',
        className: 'PacketCaptureStorageLocation',
        modelProperties: {
          storageId: {
            required: false,
            serializedName: 'storageId',
            type: {
              name: 'String'
            }
          },
          storagePath: {
            required: false,
            serializedName: 'storagePath',
            type: {
              name: 'String'
            }
          },
          filePath: {
            required: false,
            serializedName: 'filePath',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PacketCaptureStorageLocation;