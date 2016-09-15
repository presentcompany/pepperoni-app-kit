import {connect} from 'react-redux';
import {updateValue, resetValue} from './CalculatorView';
import CalculatorView from './CalculatorView';

export default connect(
	state => ({
		calculator: state.getIn(['calculator', 'value'])
	})
)(CalculatorView);
