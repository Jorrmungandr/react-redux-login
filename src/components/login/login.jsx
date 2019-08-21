import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers.js';
import './login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    const { email, password } = this.state;
    const { isLoginPending, isLoginSuccess, loginError } = this.props;
    return (
      <form name="loginForm" onSubmit={this.handleSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
          </div>
        </div>

        <input type="submit" value="Login" />

        { isLoginPending && <div>Carregando</div> }
        { isLoginSuccess && <div>Logado</div> }
        { loginError && <div>{loginError.message}</div> }
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);