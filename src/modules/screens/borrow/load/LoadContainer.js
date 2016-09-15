import {connect} from 'react-redux';
import LoadView from './LoadView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  })
)(LoadView);
