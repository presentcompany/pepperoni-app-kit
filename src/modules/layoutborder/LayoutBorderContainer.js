import {connect} from 'react-redux';
import LayoutBorderView from './LayoutBorderView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  })
)(LayoutBorderView);
