import {connect} from 'react-redux';
import CalculatorVerificationView from './CalculatorVerificationView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  })
)(CalculatorVerificationView);
