import {connect} from 'react-redux';
import {pushRoute} from './CalculatorSelectorState';
import CalculatorSelectorView from './CalculatorSelectorView';

export default connect(
  state => ({
    calculatorSelectorViewState: state.get('calculatorSelectorState')
  }),
  dispatch => ({
    pushRoute(index) {
      dispatch(pushRoute(index));
    }
  })
)(CalculatorSelectorView);
