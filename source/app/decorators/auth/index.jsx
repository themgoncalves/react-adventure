import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import LoginRoute from 'screens/login/route';


const Auth = (WrappedComponent) => {
  class Authentication extends PureComponent {
    state = { }
     
    componentDidMount() {
      if (!this.props.auth.isAuthenticated) {
        this.props.dispatch(push('/login'));
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
        if (!this.props.auth.isAuthenticated) {
          this.props.dispatch(push('/login'));
        }
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
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
