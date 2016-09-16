import {connect} from 'react-redux';
import ApplicationTypeView from './ApplicationTypeView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  	borrow: state.getIn(['borrow']),
  })
)(ApplicationTypeView);
