# _Doctor Lookup_

#### _Provides information for nearby doctors based on illness symptoms, 6/7/19_

#### By _**Liz Kelley**_

## Description

_This application takes a user's symptoms of possible illness and shows a list of doctors in Portland who can treat their medical issue._

## Setup/Installation Requirements

* _Use Chrome browser_
* _Clone repository from Github_
* _Run 'npm install' in the command line_
* _Run 'npm run build'_
* _Run 'npm run start'_
* _Go to [https://developer.betterdoctor.com/] and generate your own API key_
* _Create .env file in the root folder, paste 'exports.apiKey = YOUR API CODE HERE' and insert your API key_
* _Insert your API key in place of 'process.env.exports.apiKey'_

## Specs
| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| Return list of doctors based on user input symptoms | skin rash | Dr. McSkin, dermatologist |
| Return list of doctors based on user input doctor name | McDoogie | Dr. Houser McDoogie, proctologist |
| Return information on specific doctor | Houser McDoogie | Dr. Houser McDoogie, BillyBob medical clinic, 123 NW 23rd Ave Portland OR, 503-867-5309, www.billybobclinic.com, accepting new patients: YES |
| Return error if promise does not return 200 message | Return 401 error | 401 error: Unathorized |
| Return message if no doctors match search criteria | Dr. McFacesterson | No results match your search |

## Known Bugs
 
_None._

## Support and contact details

_123@123.com_

## Technologies Used

*_Html_
*_CSS_
*_Javascript_
*_JQuery_
*_Jest_
*_Jasmine_
*_Various webpacks_

### License

Copyright (c) 2019 **_Liz Kelley_**