import * as actions from '../store/fruits';
import {
  selectApples,
  selectBananas,
  selectOranges,
  selectTotalFruits,
} from '../store/fruits';

export default class AppController {
  static $inject = ['$ngRedux'];
  constructor($ngRedux) {
    this.$ngRedux = $ngRedux;
  }

  $onInit = () => {
    this.unsubscribe = this.$ngRedux.connect(
      this._mapStateToThis,
      actions,
    )(this);
  }

  $onDestroy = () => {
    this.unsubscribe();
  }

  _mapStateToThis = state => ({
    apples: selectApples(state),
    bananas: selectBananas(state),
    oranges: selectOranges(state),
    totalFruits: selectTotalFruits(state),
  });
}
