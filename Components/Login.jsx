import React, { Component, Fragment } from "react";
import "./Login.css";
import NavBar from "./NavBar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      email: "",
      password: "",
      loggedIn: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    if (this.state.firstName === this.state.password) {
      this.setState({ loggedIn: true });
    } else {
      alert("Invalid Credentials");
    }
  };

  render() {
    const { firstName, email, password, loggedIn } = this.state;
    if (loggedIn) {
      return <NavBar />;
    }
    return (
      <Fragment>
        <div className="body">
          <div className="container">
            <div>
              <h1 className="SanCen">Sanskrit Central</h1>
            </div>
            <div>
              <a href="" className="register">
                Register
              </a>
            </div>
            <div>
              <a href="" className="contact_us">
                Contact Us
              </a>
            </div>
            <div>
              <a href="" className="help">
                Help
              </a>
            </div>
            <div className="card bottom_card">
              <div className="card top_card">
                <div className="card-body heading">Log in</div>
                <i class="fab fa-facebook-square fa-lg fb_icon"></i>
                <i class="fab fa-twitter fa-lg twt_icon"></i>
                <i class="fab fa-google-plus fa-lg gplus_icon"></i>
              </div>
              <div className="card-body">
                <div>
                  <label htmlFor="fname">
                    {/* FirstName */}
                    <input
                      className="ipFields"
                      type="text"
                      placeholder="FirstName.."
                      value={firstName}
                      name="firstName"
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                    <i className="fa fa-user user_icon" aria-hidden="true"></i>
                  </label>
                </div>
                <div>
                  <label htmlFor="mailId">
                    {/* Email */}
                    <input
                      className="ipFields"
                      type="email"
                      placeholder="Email..."
                      value={email}
                      name="email"
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                    <i class="fa fa-envelope mail_icon" aria-hidden="true"></i>
                  </label>
                </div>
                <div>
                  <label htmlFor="pwd">
                    {/* Password */}
                    <input
                      className="ipFields"
                      type="text"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                    <i class="fas fa-lock pwd_icon" aria-hidden="true"></i>
                  </label>
                </div>
                <div>
                  <input
                    className="go_btn"
                    type="button"
                    value="Continue"
                    onClick={this.handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="" className="forgotPwd">
              Forgot Password?
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
