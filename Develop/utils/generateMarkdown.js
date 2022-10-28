// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  console.log(license === "MIT");
  if (license === "Apache 2.0") {
    return "https://img.shields.io/badge/License-Apache_2.0-blue.sbg"
  } else if (license === "GNU GPL v3") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license === "BSD 3") {
    return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0"
  } else if (license === "GNU GPL v3") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  } else if (license === "BSD 3") {
    return "https://opensource.org/licenses/BSD-3-Clause"
  } else if (license === "MIT") {
    return "https://opensource.org/licenses/MIT"
  } else {
    return ""
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache 2.0") {
    return `[${license}](${renderLicenseLink(license)}) was the license used to create project. Click to learn more.`
  } else if (license === `GNU GPL v3`) {
    return `[${license}](${renderLicenseLink(license)}) was the license used to create project. Click to learn more`
  } else if (license === `BSD 3`) {
    return `[${license}](${renderLicenseLink(license)}) was the license used to create project. Click to learn more.`
  } else if (license === `MIT`) {
    return `[${license}](${renderLicenseLink(license)}) was the license used to create project. Click to learn more.`
  } else {
    return ``
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const fakeMdString = `

  # ${data.ProjectTitle}

  [![License: ${data.License}](${renderLicenseBadge(data.License)})](${renderLicenseLink(data.License)})
  

  ## Table of Contents:
  -[Description](#Describe)
  -[Installation](#Install)
  -[Usage](#Usage)
  -[Contribution](#Contribute)
  -[Test Instructions](#Instructions)
  -[Contact](#Contact)
  -[License](#License)


## Description
${data.Describe}

## Installation
${data.Install}

## Usage
${data.Usage}

## Contribution
How Can I/Others Contribute to this?
${data.Contribute}

## Test Instructions
Example:
${data.Instructions}

## Contact
Contact Creator:
[GitHub](https://github.com/${data.GHU})
[Email](mailto:${data.Email})

## License
${renderLicenseSection(data.License)}
`;

  return fakeMdString;
}

module.exports = generateMarkdown;
