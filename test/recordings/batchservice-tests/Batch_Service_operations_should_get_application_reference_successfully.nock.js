// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/applications/my_application_id?api-version=2019-06-01.9.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#getapplicationsummaryresponse/@Element\",\"id\":\"my_application_id\",\"versions\":[\r\n    \"1.0\"\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '441478f5-8fb0-4013-9277-b6360b8f1024',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 07 Jun 2019 06:25:56 GMT',
  connection: 'close' });
 return result; }]];