import {connect} from 'react-redux';
import BorderBoxView from './BorderBoxView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  })
)(BorderBoxView);
