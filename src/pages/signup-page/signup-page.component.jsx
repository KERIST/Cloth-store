import React from 'react';

import { SignUpPageContainer, SignUpPageContent } from './signup-page.styles';
import BreadcrumbComponent from '../../components/breadcrumb/breadcrumb.component';
import { Header, Form, Button, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registrationWithEmailStart } from '../../redux/user/user.actions';
import { selectUserError, selectUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';

class SignUpPage extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errorMessage: ''
    };

    this.handleInputChage = this.handleInputChage.bind(this);
    this.handleFormSumit = this.handleFormSumit.bind(this);
  }

  handleInputChage(e) {
    const target = e.target;

    this.setState(state => ({
      ...state, [target.name]: target.value, errorMessage: ''
    }))
  }

  handleFormSumit(e) {
    e.preventDefault();

    const { name, email, password, password2 } = this.state;
    const { registrWithEmail } = this.props;

    if(password !== password2) {
      console.log('passwords not match')
      this.setState(state => ({
        ...state, errorMessage: 'Passwords don\'t match!'
      }))
    } else {
      registrWithEmail({ name, email, password });
    }
  }

  render() {
    const { name, email, password, password2, errorMessage } = this.state;
    const { userError, user } = this.props;
    const { handleInputChage, handleFormSumit } = this;

    return (<SignUpPageContainer>
        <BreadcrumbComponent />
        <Header as='h2'>SIGN UP</Header>
        <SignUpPageContent>
          <Form onSubmit={handleFormSumit}>
            <Form.Field>
              <label>Name</label>
              <input placeholder="Name" type="text" name="name" value={name} onChange={handleInputChage} required/>
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" type="email" name="email" value={email} onChange={handleInputChage} required/>
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" type="password" name="password" value={password} onChange={handleInputChage} required/>
            </Form.Field>
            <Form.Field>
              <label>Confirm password</label>
              <input placeholder="Password" type="password" name="password2" value={password2} onChange={handleInputChage} required/>
            </Form.Field>
            <Message color="red" content={userError || errorMessage} hidden={userError || errorMessage ? false : true} floating/>
            <Button type="submit" color="blue" fluid>Sign Up</Button>
          </Form>
        </SignUpPageContent>
        {user ? <Redirect to="/" /> : null}
      </SignUpPageContainer>);
  }
}

const mapStateToProps = createStructuredSelector({
  userError: selectUserError,
  user: selectUser
});

const mapDispatchToProps = dispatch => ({
  registrWithEmail: ({ name, email, password }) => {dispatch(registrationWithEmailStart({ name, email, password }))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);