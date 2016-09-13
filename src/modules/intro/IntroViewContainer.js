import {connect} from 'react-redux';
import IntroView from './IntroView';

export default connect(
  state => ({
    counter: state.getIn(['counter', 'value']),
    text: state.getIn(['text', 'value']),
    loading: state.getIn(['counter', 'loading']),
    userName: state.getIn(['auth', 'currentUser', 'name']),
    userProfilePhoto: state.getIn(['auth', 'currentUser', 'picture'])
  })
)(IntroView);
