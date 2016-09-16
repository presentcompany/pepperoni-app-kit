import {connect} from 'react-redux';
import AnnualIncomeView from './AnnualIncomeView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  	borrow: state.getIn(['borrow']),
  })
)(AnnualIncomeView);
