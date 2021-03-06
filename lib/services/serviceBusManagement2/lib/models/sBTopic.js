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
 * Description of topic resource.
 *
 * @extends models['Resource']
 */
class SBTopic extends models['Resource'] {
  /**
   * Create a SBTopic.
   * @property {number} [sizeInBytes] Size of the topic, in bytes.
   * @property {date} [createdAt] Exact time the message was created.
   * @property {date} [updatedAt] The exact time the message was updated.
   * @property {date} [accessedAt] Last time the message was sent, or a request
   * was received, for this topic.
   * @property {number} [subscriptionCount] Number of subscriptions.
   * @property {object} [countDetails] Message count details
   * @property {number} [countDetails.activeMessageCount] Number of active
   * messages in the queue, topic, or subscription.
   * @property {number} [countDetails.deadLetterMessageCount] Number of
   * messages that are dead lettered.
   * @property {number} [countDetails.scheduledMessageCount] Number of
   * scheduled messages.
   * @property {number} [countDetails.transferMessageCount] Number of messages
   * transferred to another queue, topic, or subscription.
   * @property {number} [countDetails.transferDeadLetterMessageCount] Number of
   * messages transferred into dead letters.
   * @property {moment.duration} [defaultMessageTimeToLive] ISO 8601 Default
   * message timespan to live value. This is the duration after which the
   * message expires, starting from when the message is sent to Service Bus.
   * This is the default value used when TimeToLive is not set on a message
   * itself.
   * @property {number} [maxSizeInMegabytes] Maximum size of the topic in
   * megabytes, which is the size of the memory allocated for the topic.
   * Default is 1024.
   * @property {boolean} [requiresDuplicateDetection] Value indicating if this
   * topic requires duplicate detection.
   * @property {moment.duration} [duplicateDetectionHistoryTimeWindow] ISO8601
   * timespan structure that defines the duration of the duplicate detection
   * history. The default value is 10 minutes.
   * @property {boolean} [enableBatchedOperations] Value that indicates whether
   * server-side batched operations are enabled.
   * @property {string} [status] Enumerates the possible values for the status
   * of a messaging entity. Possible values include: 'Active', 'Disabled',
   * 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting',
   * 'Renaming', 'Unknown'
   * @property {boolean} [supportOrdering] Value that indicates whether the
   * topic supports ordering.
   * @property {moment.duration} [autoDeleteOnIdle] ISO 8601 timespan idle
   * interval after which the topic is automatically deleted. The minimum
   * duration is 5 minutes.
   * @property {boolean} [enablePartitioning] Value that indicates whether the
   * topic to be partitioned across multiple message brokers is enabled.
   * @property {boolean} [enableExpress] Value that indicates whether Express
   * Entities are enabled. An express topic holds a message in memory
   * temporarily before writing it to persistent storage.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SBTopic
   *
   * @returns {object} metadata of SBTopic
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SBTopic',
      type: {
        name: 'Composite',
        className: 'SBTopic',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          sizeInBytes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.sizeInBytes',
            type: {
              name: 'Number'
            }
          },
          createdAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.createdAt',
            type: {
              name: 'DateTime'
            }
          },
          updatedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.updatedAt',
            type: {
              name: 'DateTime'
            }
          },
          accessedAt: {
            required: false,
            readOnly: true,
            serializedName: 'properties.accessedAt',
            type: {
              name: 'DateTime'
            }
          },
          subscriptionCount: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscriptionCount',
            type: {
              name: 'Number'
            }
          },
          countDetails: {
            required: false,
            readOnly: true,
            serializedName: 'properties.countDetails',
            type: {
              name: 'Composite',
              className: 'MessageCountDetails'
            }
          },
          defaultMessageTimeToLive: {
            required: false,
            serializedName: 'properties.defaultMessageTimeToLive',
            type: {
              name: 'TimeSpan'
            }
          },
          maxSizeInMegabytes: {
            required: false,
            serializedName: 'properties.maxSizeInMegabytes',
            type: {
              name: 'Number'
            }
          },
          requiresDuplicateDetection: {
            required: false,
            serializedName: 'properties.requiresDuplicateDetection',
            type: {
              name: 'Boolean'
            }
          },
          duplicateDetectionHistoryTimeWindow: {
            required: false,
            serializedName: 'properties.duplicateDetectionHistoryTimeWindow',
            type: {
              name: 'TimeSpan'
            }
          },
          enableBatchedOperations: {
            required: false,
            serializedName: 'properties.enableBatchedOperations',
            type: {
              name: 'Boolean'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Active', 'Disabled', 'Restoring', 'SendDisabled', 'ReceiveDisabled', 'Creating', 'Deleting', 'Renaming', 'Unknown' ]
            }
          },
          supportOrdering: {
            required: false,
            serializedName: 'properties.supportOrdering',
            type: {
              name: 'Boolean'
            }
          },
          autoDeleteOnIdle: {
            required: false,
            serializedName: 'properties.autoDeleteOnIdle',
            type: {
              name: 'TimeSpan'
            }
          },
          enablePartitioning: {
            required: false,
            serializedName: 'properties.enablePartitioning',
            type: {
              name: 'Boolean'
            }
          },
          enableExpress: {
            required: false,
            serializedName: 'properties.enableExpress',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SBTopic;
