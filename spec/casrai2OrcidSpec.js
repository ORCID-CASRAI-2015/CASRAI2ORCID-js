/*
 * Tests
 */
var casrai2OrcidJs = require('../casrai2Orcid.js');

describe('Test to convert minimal casrai data to orcid format', function() {
	it('should check if orcid data output is as expected', function() {
		var input = {
			"Funding Organization": {
				"Name": "Dignissim PC",
				"ID": "e57b11ea-1c9f-4720-86a1-041587e860f5",
				"ID Type": "FundREF"
			},
			"Funding Award": {
				"Amount": "152719.0 GBP",
				"Start Date": "2015-05-01T09:18:05Z",
				"End Date": "2015-05-25T09:18:07Z"
			},
			"Principal Investigator": {
				"Salutation": "Mr",
				"First Name": "Will",
				"Last Name": "Simpson",
				"Funder Account PIN": "a0d53c76-0ea8-4996-9280-019278227e83",
				"ID": "0000-0001-8451-0064",
				"ID Type": "ORCID"
			},
			"Project": {
				"ID": "GRNNO1234",
				"Title": "Test"
			},
			"Funds Request": {
				"Reference ID": "41190f2a-b30b-4b2a-bb9a-b8124283ae21"
			},
			"Lead Institution": {
				"Name": "Qatar Computing Research Institute",
				"ID": "90579672-8b6a-4544-8008-a7eb68880169",
				"ID Type": "ISNI"
			}
      	}
      	var expectedOrcidData = {
      		"funding-type" : "AWARD",
      		"funding-title" : {
      			"title" : {
      				"value" : "Test"
      			},
      			"translated-title" : null
      		},
      		"amount" : {
      			"value" : "152719.0",
      			"currency-code" : "GBP"
      		},
      		url: null,
      		"start-date" : {
      			"year" : {
      				"value" : "2015"
      			},
      			"month" : {
      				"value" : "05"
      			},
      			"day" : {
      				"value": "01"
      			}
      		},
      		"end-date" : {
      			"year" : {
      				"value" : "2015"
      			},
      			"month" : {
      				"value" : "05"
      			},
      			"day" : {
      				"value": "25"
      			}
      		},
      		"funding-external-identifiers" : {
      			"funding-external-identifier" : [ {
      					"funding-external-identifier-type" : "GRANT_NUMBER",
      					"funding-external-identifier-value" : "GRNNO1234",
      					"funding-external-identifier-url" : null,
      				}
      			]
      		},
      		"organization" : {
      			"name" : "Dignissim PC",
      			"address" : {
      				"city" : "London",
      				"region" : "London",
      				"country" : "GB"
      			},
      		},
      	};
      	
		var orcidData = casrai2OrcidJs.convertCasraiAward2Orcid(input);
		
		expect(orcidData).toEqual(expectedOrcidData);
	});
});

