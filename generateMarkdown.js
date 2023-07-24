// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Mit':
      return '[![License: MIT](https://img.shields.io/badge/any_text-you_like-blue)](https://opensource.org/licenses/MIT)';
      case 'ISC':
        return '[![License: ISC](https://img.shields.io/badge/any_text-you_like-blue)](http://opensource.org/licenses/ISC)'
        case 'Apache license 2.0':
          return '[![License: Apache license 2.0](https://img.shields.io/badge/any_text-you_like-blue)](http://www.apache.org/licenses/LICENSE-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}
## Table of Contents
{installation}(#installation)
{usage}(#usage)
{credits}(#credits)
{features}(#features)
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
${data.email}, ${data.github},
`;
}

module.exports = generateMarkdown;
