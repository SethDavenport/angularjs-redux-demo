import Ws{{UpperCamelCase name}}Controller from './{{dashCase name}}.controller';

describe('Ws{{UpperCamelCase name}}', () => {
  beforeEach(angular.mock.module('ws.terminal'));

  it('can be tested at the controller level [PREFERRED]', () => {
    const controller = new Ws{{UpperCamelCase name}}Controller(
      /* pass stub dependencies here if needed */);

    /* Assign bindings to controller here if needed. */
    controller.$onInit();

    expect(controller).toBeDefined();
  });

  describe('can be tested at the template level [DELETE IF YOUR TEMPLATE IS TRIVIAL]', () => {
    let $scope;
    let myNewComponent;

    function compileComponent(elementHtml) {
      return inject(($rootScope, $compile) => {
        $scope = $rootScope.$new();
        myNewComponent = angular.element(elementHtml);
        $compile(myNewComponent)($scope);
        $scope.$apply();
      });
    }

    it('renders correctly', () => {
      compileComponent('<ws-{{dashCase name}}></ws-{{dashCase name}}>');
      expect(myNewComponent.text().trim()).toBe('Hello, I am Ws{{UpperCamelCase name}}Component');
    });
  });
});
