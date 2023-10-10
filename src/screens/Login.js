import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/images/logo1.png";
import { updateEmail, updatePassword,onLoggedin } from "../actions";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoad: true
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoad: false
      })
    }, 500);
    document.body.classList.remove("theme-cyan");
    document.body.classList.remove("theme-purple");
    document.body.classList.remove("theme-blue");
    document.body.classList.remove("theme-green");
    document.body.classList.remove("theme-orange");
    document.body.classList.remove("theme-blush");
  }
  render() {
    const { navigation } = this.props;
    const { email, password } = this.props;
    return (
      <div className="theme-cyan">
        <div className="page-loader-wrapper" style={{ display: this.state.isLoad ? 'block' : 'none' }}>
          <div className="loader">
            <div className="m-t-30"><img src={require('../assets/images/logo-icon.svg')} width="48" height="48" alt="Lucid" /></div>
            <p>Please wait...</p>
          </div>
        </div>
        <div className="hide-border">
          <div className="vertical-align-wrap">
            <div className="vertical-align-middle auth-main">
              <div className="auth-box">
                <div className="top">
                  <img src={Logo} alt="Lucid" style={{ height: "100px", margin: "10px" }} />
                </div>
                <div className="card">
                  <div className="header">
                    <p className="lead">Login to your account</p>
                  </div>
                  <div className="body">
                    <div className="form-auth-small" action="index.html">
                      <div className="form-group">
                        <label className="control-label sr-only">Email</label>
                        <input
                          className="form-control"
                          id="signin-email"
                          placeholder="Email"
                          type="email"
                          /* value={email} */
                          value="user@thememakker.com"
                          onChange={val => {
                            this.props.updateEmail(val.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label sr-only">
                          Password
                        </label>
                        <input
                          className="form-control"
                          id="signin-password"
                          placeholder="Password"
                          type="password"
                          /* value={password} */
                          value="secretpassword"
                          onChange={val => {
                            this.props.updatePassword(val.target.value);
                          }}
                        />
                      </div>
                      <div className="form-group clearfix">
                        <label className="fancy-checkbox element-left">
                          <input type="checkbox" />
                          <span>Remember me</span>
                        </label>
                      </div>
                      <a
                        className="btn btn-primary btn-lg btn-block"
                        href="dashboard"
                      >Login</a>
                      <div className="bottom">
                        <span className="helper-text m-b-10">
                          <i className="fa fa-lock"></i>{" "}
                          <a href={`${process.env.PUBLIC_URL}/forgotpassword`} 
                          >
                            Forgot password?
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  updateEmail: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

const mapStateToProps = ({ loginReducer }) => ({
  email: loginReducer.email,
  password: loginReducer.password
});

export default connect(mapStateToProps, {
  updateEmail,
  updatePassword,
  onLoggedin
})(Login);
