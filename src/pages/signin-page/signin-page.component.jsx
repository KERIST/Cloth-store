import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SignInPageContainer, SignInPageContent, SignInPageText, SignInPageLink, SignInPageMessage } from './signin-page.styles';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { Header, Form, Button } from 'semantic-ui-react';
import { signInWithEmailStart } from '../../redux/user/user.actions';
import { selectUserError, selectUser } from '../../redux/user/user.selectors';
import { Redirect } from 'react-router-dom';

const SignInPage = ({ signInWithEmail, userError, user }) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');


  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    signInWithEmail({email: emailValue, password: passwordValue});
  }

  return (<SignInPageContainer>
      <BreadcrumbComponent />
      <Header as='h2'>SIGN IN</Header>
      <SignInPageContent>
        <Form onSubmit={onFormSubmit}>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" type="email" name="email" required value={emailValue} onChange={handleEmailChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" value={passwordValue} onChange={handlePasswordChange} type="password" name="password" required />
          </Form.Field>
          {userError ? <SignInPageMessage color="red" compact content={userError} floating/> : null}
          {user ? <Redirect to="/" /> : null}
          <Button type="submit" fluid color="blue" >Sign In</Button>
        </Form>
        <SignInPageText>Don't have an account, <SignInPageLink to="/sign-up">sign up</SignInPageLink> for free</SignInPageText>
      </SignInPageContent>
    </SignInPageContainer>);
}

const mapStateToProps = createStructuredSelector({
  userError: selectUserError,
  user: selectUser
})

const mapDispatchToProps = dispatch => ({
  signInWithEmail: ({email, password}) => {dispatch(signInWithEmailStart({email, password}))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);