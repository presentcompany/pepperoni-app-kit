import {connect} from 'react-redux';
import MainView from './MainView';

export default connect(
  dispatch => ({
    pushRoute(index) {
      dispatch(pushRoute(index));
    }
  })
)(MainView);
