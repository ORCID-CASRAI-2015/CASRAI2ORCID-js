casrai2Orcid.js
=================

Node module that converts CASRAI data from PURE into ORCID format.

## Functions

* convertCasraiAward2Orcid(input) Takes a JSON object containing an award in CASRAI format from PURE, and returns the same data as a JSON object in ORCID funding format.

See casrai2OrcidSpec.js and for examples.

## Using with [Node.js](http://nodejs.org/)
1. Test
    
    npm test

2. Run on the command line

    node convert.js spec/singleAwardInCasraiFormat.json out.json
    
(Reads the award data from spec/singleAwardInCasraiFormat.json and outputs to out.json.)

   
## Contributing

Contributions are welcome.

Please make sure the unit tests (casrai2OrcidSpec.js) reflect the changes and complete successfully. 
