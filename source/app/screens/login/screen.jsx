/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.2
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import animate from 'decorators/animate';
import Button from 'components/v1/button';
import Input from 'components/v1/input';
import { authenticateUser } from 'actions';

// Import Images
import TheMgoncalvesLogoImage from 'static/images/themgoncalves-white.png';

// Import Project Information
import ProjectInfo from '../../../../package.json';

import {
  MainWrapper,
  LoginWrapper,
  TheMgoncalvesLogo,
  FormWrapper,
  FormItem,
  ForgotPassword,
} from './styles';

@animate
export class Login extends Component {
  static propTypes = {
    authenticateUser: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
  }

  handleForgotPwdClick = () => {
    alert('This is just a mock feature :)'); // eslint-disable-line no-alert
  }

  handleSignin = () => {
    this.props.authenticateUser({ email: this.state.email, password: this.state.password });
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Login | {ProjectInfo.description}</title>
        </Helmet>
        <MainWrapper>
          <div className="container">
            <div className="row">
              <LoginWrapper className="col-10 offset-1 col-md-8 offset-md-2 col-lg-5 offset-lg-3">
                <Link to="/"><TheMgoncalvesLogo src={TheMgoncalvesLogoImage} alt="themgoncalves logo" /></Link> { /* eslint-disable-line jsx-a11y/anchor-is-valid */}
                <FormWrapper>
                  <FormItem>
                    <Input type="text" placeholder="Your @username" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                  </FormItem>
                  <FormItem>
                    <Input type="password" placeholder="Your password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                  </FormItem>
                  <FormItem textAlign="right">
                    <ForgotPassword href="javascript:void(0);" onClick={this.handleForgotPwdClick}>Forgot your password?</ForgotPassword> { /* eslint-disable-line no-script-url */}
                  </FormItem>
                  <FormItem>
                    <Button onClick={this.handleSignin}>Sign in</Button>
                  </FormItem>
                </FormWrapper>
              </LoginWrapper>
            </div>
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { authenticateUser })(Login);
