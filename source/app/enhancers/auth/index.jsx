import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

const Auth = (WrappedComponent) => {
  class Authentication extends PureComponent {
    static propTypes = {
      auth: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
      dispatch: PropTypes.func.isRequired,
    }

    state = { }

    componentDidMount() {
      if (!this.props.auth.isAuthenticated) {
        this.props.dispatch(push('/login'));
      }
    }

    componentDidUpdate(prevProps) {
      if (prevProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
        if (!this.props.auth.isAuthenticated) {
          this.props.dispatch(push('/login'));
        }
      }
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  }

  function mapStateToProps({ auth }) {
    return {
      auth,
    };
  }

  return connect(mapStateToProps)(Authentication);
};

export default Auth;
