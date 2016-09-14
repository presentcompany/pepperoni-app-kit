import {connect} from 'react-redux';
import BrokerMainView from './BrokerMainView';

export default connect(
  state => ({
  	page: state.getIn(['page']),
  })
)(BrokerMainView);
