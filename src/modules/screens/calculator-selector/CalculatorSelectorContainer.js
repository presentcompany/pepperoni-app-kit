import {connect} from 'react-redux';
import {pushRoute} from './CalculatorSelectorState';
import CalculatorSelectorView from './CalculatorSelectorView';

export default connect()(CalculatorSelectorView);
