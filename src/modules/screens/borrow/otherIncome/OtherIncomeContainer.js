import {connect} from 'react-redux';
import OtherIncomeView from './OtherIncomeView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  	borrow: state.getIn(['borrow']),
  })
)(OtherIncomeView);
