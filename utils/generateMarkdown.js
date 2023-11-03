const fs = require('fs');

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'APACHE 2.0') {
    return `http://www.apache.org/licenses/LICENSE-2.0.html` 
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contributions](#contributions)
  * [Video](#video)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}


  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Video
  
  video:  The demonstration video link.
    video: [Click Here](https://drive.google.com/file/d/1uopH5zJMfE_qRrwWx3Dxe8Vf_NUU0_sB/view) 
  
    Or Copy This Link:
    [https://drive.google.com/file/d/1uopH5zJMfE_qRrwWx3Dxe8Vf_NUU0_sB/view] 
  
    

  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;







