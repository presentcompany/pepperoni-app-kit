import {connect} from 'react-redux';
import LoanTypeView from './LoanTypeView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  	borrow: state.getIn(['borrow']),
  })
)(LoanTypeView);
