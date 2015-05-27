/* browser and NodeJs compatible */
(function(exports) {

	
	function convertCasraiDate2Orcid(inputDate){
		return {
			year: { value: inputDate.getFullYear().toString() },
			month: { value: (inputDate.getMonth() < 9 ? "0" : "") + (inputDate.getMonth() + 1) },
			day: { value: (inputDate.getDate() < 10 ? "0" : "") + inputDate.getDate() },
		};
	}
	
	exports.convertCasraiAward2Orcid = function(input){
		var output = {};
		output['funding-type'] = 'AWARD';
		output['funding-title'] = { title: { value: input.Project.Title }, 'translated-title': null };
		var amount = input['Funding Award']['Amount'].split(" ");
		output.amount = { value: amount[0], 'currency-code': amount[1] };
		output.url = null;
		output['start-date'] = convertCasraiDate2Orcid(new Date(input['Funding Award']['Start Date']));
		output['end-date'] = convertCasraiDate2Orcid(new Date(input['Funding Award']['End Date']));
		output['funding-external-identifiers'] = {
			'funding-external-identifier': [
				{
					"funding-external-identifier-type" : "GRANT_NUMBER",
      				"funding-external-identifier-value" : input.Project.ID,
      				"funding-external-identifier-url" : null,
				}
			]
		};
		output.organization = {
      			"name" : input['Funding Organization'].Name,
      			"address" : {
      				"city" : "London",
      				"region" : "London",
      				"country" : "GB"
      			},
      		}
		return output;
	}
		

})(typeof exports === 'undefined' ? this.casrai2OrcidJs = {} : exports);

