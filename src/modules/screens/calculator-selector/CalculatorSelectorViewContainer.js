import {connect} from 'react-redux';
import {pushRoute} from './CalculatorSelectorViewState';
import CalculatorSelectorView from './CalculatorSelectorView';

export default connect(
  state => ({
    calculatorSelectorViewState: state.get('calculatorSelectorViewState')
  }),
  dispatch => ({
    pushRoute(index) {
      dispatch(pushRoute(index));
    }
  })
)(CalculatorSelectorView);
