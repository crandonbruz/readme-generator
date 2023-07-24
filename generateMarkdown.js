// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Mit':
      return '[![License: MIT](https://img.shields.io/badge/MIT-blue)](https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/ISC-blue)](http://opensource.org/licenses/ISC)';
    case 'Apache license 2.0':
      return '[![License: Apache license 2.0](https://img.shields.io/badge/apache_license_2.0-blue)](http://www.apache.org/licenses/LICENSE-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '(http://opensource.org/licenses/ISC)';
    case 'Apache license 2.0':
      return '(http://www.apache.org/licenses/LICENSE-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const badge = renderLicenseBadge(data.license);
const link = renderLicenseBadge(data.license)  
  return `# ${data.title}
${badge}
## Description
${data.description}
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[How to Contribute](#contribute)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## How to Contribute
${data.contribute}
## Tests
${data.tests},
## Questions
Email:
${data.email} 
[Github:](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
