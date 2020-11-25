// function to generate markdown for README
function generateMarkdown(data) {
  console.log(`# ${data.projectTitle}
  
  `)
  return `# ${data.projectTitle}
My name is ${data.name}.
`;
}

module.exports = generateMarkdown;
