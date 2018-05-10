import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import LoginRoute from 'screens/login/route';


const Auth = (WrappedComponent) => {
  class Authentication extends PureComponent {
    state = {
      isAuthenticated: this.props.auth.isAuthenticated,
    }
     
    componentDidMount() {
      if (!this.state.isAuthenticated) {
        this.props.dispatch(push('/login'));
      }
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('prevProps', prevProps);
      console.log('prevState', prevState);
      if (prevProps.auth.isAuthenticated !== prevState.isAuthenticated) {
        if (!this.props.auth.isAuthenticated) {
          this.props.dispatch(push(LoginRoute.path));
        }
      }
    }

    render() {
      return (
        <WrappedComponent />
      )
    }
  }

  function mapStateToProps({ auth }) {
    return {
      auth
    }
  };

  return connect(mapStateToProps)(Authentication);
  
}

export default Auth;
