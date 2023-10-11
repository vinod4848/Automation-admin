import React from "react";
import { Dropdown } from "react-bootstrap";
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
                <button className="nav-link active show" data-toggle="tab">
                  Active{" "}
                </button>
              </li>
              <li
                className={
                  this.state.dropdown
                    ? "nav-item dropdown show"
                    : "nav-item dropdown"
                }
              >
                <Dropdown className="">
                  <Dropdown.Toggle
                    variant="success"
                    as="button"
                    className="nav-link "
                    id="dropdown-basic"
                  >
                    Dropdown
                  </Dropdown.Toggle>
                  <Dropdown.Menu as="div" className="dropdown-menu">
                    <button className="dropdown-item">Action</button>
                    <button className="dropdown-item">Another action</button>
                    <button className="dropdown-item">Something else here</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item">Separated link</button>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item">
                <button className="nav-link">Link</button>
              </li>
              <li className="nav-item">
                <button className="nav-link disabled">Disabled</button>
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
