import React from "react";
import { connect } from "react-redux";

class UIDropdownTabCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: false };
  }
  dorpdownToggle() {
    this.setState({ dropdown: !this.state.dropdown });
  }
  render() {
    const { HeaderText, NavTabClass, TabData } = this.props;

    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>{HeaderText}</h2>
          </div>
          <div className="body">
            <ul className={NavTabClass ? NavTabClass : "nav nav-tabs"}>
              <li className="nav-item mr-1">
                <p className="nav-link active show" data-toggle="tab">
                  Active{" "}
                </p>
              </li>
              <li
                className={
                  this.state.dropdown
                    ? "nav-item dropdown mr-1 show"
                    : "nav-item dropdown mr-1"
                }
              >
                <p
                  className="nav-link dropdown-toggle"
                  onClick={() => {
                    this.dorpdownToggle();
                  }}
                  data-toggle="dropdown"
                  role="button"
                >
                  Dropdown
                </p>
                <div
                  className={
                    this.state.dropdown ? "dropdown-menu show" : "dropdown-menu"
                  }
                  x-placement="bottom-start"
                >
                  <p className="dropdown-item">Action</p>
                  <p className="dropdown-item">Another action</p>
                  <p className="dropdown-item">Something else here</p>
                  <div className="dropdown-divider"></div>
                  <p className="dropdown-item">Separated link</p>
                </div>
              </li>
              <li className="nav-item">
                <p className="nav-link">Link</p>
              </li>
              <li className="nav-item">
                <p className="nav-link disabled">Disabled</p>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="Active">
                <h6>Home</h6>
                <p>{TabData}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIDropdownTabCard);
