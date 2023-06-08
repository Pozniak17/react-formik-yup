import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { LoginForm } from './LoginForm/LoginForm';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <LoginForm />
      </>
    );
  }
}
