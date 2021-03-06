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
 * Class representing a SearchResultsAnswer.
 * @extends models['Answer']
 */
class SearchResultsAnswer extends models['Answer'] {
  /**
   * Create a SearchResultsAnswer.
   * @property {object} [queryContext]
   * @property {string} [queryContext.originalQuery] The query string as
   * specified in the request.
   * @property {string} [queryContext.alteredQuery] The query string used by
   * Bing to perform the query. Bing uses the altered query string if the
   * original query string contained spelling mistakes. For example, if the
   * query string is "saling downwind", the altered query string will be
   * "sailing downwind". This field is included only if the original query
   * string contains a spelling mistake.
   * @property {string} [queryContext.alterationOverrideQuery] The query string
   * to use to force Bing to use the original string. For example, if the query
   * string is "saling downwind", the override query string will be "+saling
   * downwind". Remember to encode the query string which results in
   * "%2Bsaling+downwind". This field is included only if the original query
   * string contains a spelling mistake.
   * @property {boolean} [queryContext.adultIntent] A Boolean value that
   * indicates whether the specified query has adult intent. The value is true
   * if the query has adult intent; otherwise, false.
   * @property {boolean} [queryContext.askUserForLocation] A Boolean value that
   * indicates whether Bing requires the user's location to provide accurate
   * results. If you specified the user's location by using the
   * X-MSEdge-ClientIP and X-Search-Location headers, you can ignore this
   * field. For location aware queries, such as "today's weather" or
   * "restaurants near me" that need the user's location to provide accurate
   * results, this field is set to true. For location aware queries that
   * include the location (for example, "Seattle weather"), this field is set
   * to false. This field is also set to false for queries that are not
   * location aware, such as "best sellers".
   * @property {boolean} [queryContext.isTransactional]
   * @property {number} [totalEstimatedMatches] The estimated number of
   * webpages that are relevant to the query. Use this number along with the
   * count and offset query parameters to page the results.
   * @property {boolean} [isFamilyFriendly]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SearchResultsAnswer
   *
   * @returns {object} metadata of SearchResultsAnswer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SearchResultsAnswer',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'SearchResultsAnswer',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
            type: {
              name: 'String'
            }
          },
          followUpQueries: {
            required: false,
            readOnly: true,
            serializedName: 'followUpQueries',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'QueryElementType',
                  type: {
                    name: 'Composite',
                    className: 'Query'
                  }
              }
            }
          },
          queryContext: {
            required: false,
            readOnly: true,
            serializedName: 'queryContext',
            type: {
              name: 'Composite',
              className: 'QueryContext'
            }
          },
          totalEstimatedMatches: {
            required: false,
            readOnly: true,
            serializedName: 'totalEstimatedMatches',
            type: {
              name: 'Number'
            }
          },
          isFamilyFriendly: {
            required: false,
            readOnly: true,
            serializedName: 'isFamilyFriendly',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SearchResultsAnswer;
