module.exports = (plop) => {
  // Add ability to enter paths.
  plop.addPrompt('directory', require('inquirer-directory')); // eslint-disable-line global-require

  plop.setHelper('UpperCamelCase', (item) => {
    const firstLetter = `${item[0].toUpperCase()}`;
    return `${firstLetter}${item.slice(1)}`;
  });

  plop.setGenerator('Component', {
    description: 'Create a new component',
    // prompts to ask user
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is your component name in camelCase? e.g: organizationSettingsForm',
      validate: (input) => {
        if (input.trim()) {
          return true;
        }
        return 'Name is required';
      },
    }, {
      type: 'directory',
      name: 'path',
      message: 'What directory do you want your file in?',
      basePath: `${plop.getPlopfilePath()}/src/app`,
    }],

    // Actions to take
    actions: () => {
      const actions = [{
        type: 'add',
        path: `${plop.getPlopfilePath()}/src/app/{{path}}/{{dashCase name}}/{{dashCase name}}.tmpl.html`,
        templateFile: 'plop_templates/template.tmpl.html',
      }, {
        type: 'add',
        path: `${plop.getPlopfilePath()}/src/app/{{path}}/{{dashCase name}}/index.js`,
        templateFile: 'plop_templates/index.js',
      }, {
        type: 'add',
        path: `${plop.getPlopfilePath()}/src/app/{{path}}/{{dashCase name}}/{{dashCase name}}.controller.js`,
        templateFile: 'plop_templates/controller.js',
      }, {
        type: 'add',
        path: `${plop.getPlopfilePath()}/src/app/{{path}}/{{dashCase name}}/{{dashCase name}}.test.js`,
        templateFile: 'plop_templates/test.js',
      }, {
        type: 'add',
        path: `${plop.getPlopfilePath()}/src/app/{{path}}/{{dashCase name}}/_{{dashCase name}}.scss`,
        templateFile: 'plop_templates/styles.scss',
      }];
      return actions;
    },
  });
};
