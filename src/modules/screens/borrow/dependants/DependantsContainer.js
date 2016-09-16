import {connect} from 'react-redux';
import DependantsView from './DependantsView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  	borrow: state.getIn(['borrow']),
  })
)(DependantsView);
