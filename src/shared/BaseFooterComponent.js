import { Component } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaFacebookSquare,
  FaFacebookMessenger,
} from "react-icons/fa";

class BaseFooter extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="container-fluid">
          <div className="row bg-secondary text-center pt-4 pb-3">
            <div className="col-6 col-sm-4 offset-2 offset-sm-1">
              <ul className="list-unstyled">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/ourteam">Our Team</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div
              className="col-6 col-sm-5 offset-2 offset-sm-1"
              id="socialIconSection"
            >
              <h5>Connect With Us</h5>
              <div className="d-flex align-items-center">
                <a className="btn btn-social-icon btn-facebook">
                  <FaFacebookF />
                </a>
                <a className="btn btn-social-icon btn-twitter">
                  <FaTwitter />
                </a>
                <a className="btn btn-social-icon btn-instagram">
                  <FaInstagram />
                </a>
                <a className="btn btn-social-icon btn-google">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default BaseFooter;
