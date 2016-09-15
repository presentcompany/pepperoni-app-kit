import {connect} from 'react-redux';
import BorrowView from './BorrowView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  })
)(BorrowView);
