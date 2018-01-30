import template from './counter.tmpl.html';
import './_counter.scss';

const WsCounterComponent = {
  template,
  bindings: {
    count: '<',
    onIncrement: '&',
    onDecrement: '&',
  },
};

export default WsCounterComponent;
