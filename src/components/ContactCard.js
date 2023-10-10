import React from "react";
import { connect } from "react-redux";
import Avatar1 from "../assets/images/xs/avatar1.jpg";
import { onPresAddEvent } from "../actions";

class AddEventModal extends React.Component {
  render() {
    const { Image, Name, AddressFirst, AddressSecund } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card">
          <div className="body text-center">
            <div className="chart easy-pie-chart-1" data-percent="75">
              {" "}
              <span>
                <img
                  src={Image ? Image : Avatar1}
                  alt="user"
                  className="rounded-circle"
                />
              </span>{" "}
              <canvas height="100" width="100"></canvas>
            </div>
            <h6>{Name}</h6>
            <ul className="social-links list-unstyled">
              <li>
                <a title="facebook">
                  <i className="zmdi zmdi-facebook"></i>
                </a>
              </li>
              <li>
                <a title="twitter">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
              </li>
              <li>
                <a title="instagram">
                  <i className="zmdi zmdi-instagram"></i>
                </a>
              </li>
            </ul>
            <small>
              {AddressFirst}
              <br />
              {AddressSecund}{" "}
            </small>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isEventModal: mailInboxReducer.isEventModal,
});

export default connect(mapStateToProps, { onPresAddEvent })(AddEventModal);
