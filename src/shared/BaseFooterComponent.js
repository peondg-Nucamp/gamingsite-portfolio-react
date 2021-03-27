import { Component } from "react";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

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
            <div className="col-6 col-sm-5 ml-auto" id="socialIconSection">
              <h5>Connect With Us</h5>
              <button className="btn btn-social-icon btn-facebook">
                <FaFacebookF />
              </button>
              <button className="btn btn-social-icon btn-twitter">
                <FaTwitter />
              </button>
              <button className="btn btn-social-icon btn-instagram">
                <FaInstagram />
              </button>
              <button className="btn btn-social-icon btn-google">
                <FaYoutube />
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default BaseFooter;
