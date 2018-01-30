import controller from './{{dashCase name}}.controller';
import template from './{{dashCase name}}.tmpl.html';

const Ws{{UpperCamelCase name}}Component = {
  template,
  controller,
};

/* DON'T FORGET TO CALL THIS SOMEWHERE:
angular
  .module('ws.terminal')
  .component('ws{{UpperCamelCase name}}', Ws{{UpperCamelCase name}}Component)
*/
export default Ws{{UpperCamelCase name}}Component;
