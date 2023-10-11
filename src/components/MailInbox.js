import React from "react";
import { connect } from "react-redux";
import {
  onPressTagDropdown,
  onPressMoreDropdown,
  onPressCompose,
} from "../actions";
import { Dropdown } from "react-bootstrap";

class MailInbox extends React.Component {
  render() {
    const { isTagDropDown, isMoreDropDown } = this.props;
    return (
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="mobile-left">
              <p
                className="btn btn-primary toggle-email-nav collapsed"
                data-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="email-nav"
              >
                <span className="btn-label">
                  <i className="la la-bars"></i>
                </span>
                Menu
              </p>
            </div>
            <div className="mail-inbox">
              <div className="mail-left collapse" id="email-nav">
                <div className="mail-compose m-b-20">
                  <p
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.onPressCompose(false);
                    }}
                    className="btn btn-danger btn-block"
                  >
                    Compose
                  </p>
                </div>
                <div className="mail-side">
                  <ul className="nav">
                    <li className="active">
                      <p>
                        <i className="icon-envelope"></i>Inbox
                        <span className="badge badge-primary float-right">
                          6
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="icon-cursor"></i>Sent
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="icon-envelope-open"></i>Draft
                        <span className="badge badge-info float-right">3</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="icon-action-redo"></i>Outbox
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="icon-star"></i>Starred
                        <span className="badge badge-warning float-right">
                          6
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="icon-trash"></i>Trash
                        <span className="badge badge-danger float-right">
                          9
                        </span>
                      </p>
                    </li>
                  </ul>
                  <h3 className="label">
                    Labels{" "}
                    <p className="float-right m-r-10" title="Add New Labels">
                      <i className="icon-plus"></i>
                    </p>
                  </h3>
                  <ul className="nav">
                    <li className="active">
                      <p>
                        <i className="fa fa-circle text-danger"></i>Web Design
                        <span className="badge badge-primary float-right">
                          5
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-circle text-info"></i>Recharge
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-circle text-dark"></i>Paypal
                      </p>
                    </li>
                    <li>
                      <p>
                        <i className="fa fa-circle text-primary"></i>Family
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mail-right">
                <div className="header d-flex align-center">
                  <h2>Inbox</h2>
                  <form className="ml-auto">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Mail"
                        aria-label="Search Mail"
                        aria-describedby="search-mail"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="search-mail">
                          <i className="icon-magnifier"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mail-action clearfix">
                  <div className="pull-left">
                    <div className="fancy-checkbox d-inline-block">
                      <label>
                        <input
                          className="select-all"
                          type="checkbox"
                          name="checkbox"
                        />
                        <span></span>
                      </label>
                    </div>
                    <div className="btn-group mr-1">
                      <p className="btn btn-outline-secondary btn-sm hidden-sm">
                        Refresh
                      </p>
                      <p className="btn btn-outline-secondary btn-sm hidden-sm">
                        Archive
                      </p>
                      <p className="btn btn-outline-secondary btn-sm">Trash</p>
                    </div>
                    <div
                      className={
                        isTagDropDown ? "btn-group show mr-1" : "btn-group mr-1"
                      }
                    >
                      <Dropdown className="">
                        <Dropdown.Toggle
                          variant="success"
                          as="p"
                          className="btn btn-outline-secondary btn-sm"
                          id="dropdown-basic"
                        >
                          Tags
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="div" className="dropdown-menu">
                          <p
                            className="dropdown-item"
                            onClick={() => {
                              this.props.onPressTagDropdown();
                            }}
                          >
                            Tag 1
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={() => {
                              this.props.onPressTagDropdown();
                            }}
                          >
                            Tag 2
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={() => {
                              this.props.onPressTagDropdown();
                            }}
                          >
                            Tag 3
                          </p>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div
                      className={
                        isMoreDropDown ? "btn-group show" : "btn-group"
                      }
                    >
                      <Dropdown drop="down" className="">
                        <Dropdown.Toggle
                          variant="success"
                          as="p"
                          className="btn btn-outline-secondary btn-sm"
                          id="dropdown-basic"
                        >
                          More
                        </Dropdown.Toggle>
                        <Dropdown.Menu as="div" className="dropdown-menu">
                          <p
                            className="dropdown-item"
                            href="#!"
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                          >
                            Mark as read
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={() => {
                              this.props.onPressMoreDropdown();
                            }}
                          >
                            Mark as unread
                          </p>
                          <p
                            className="dropdown-item"
                            onClick={() => {
                              this.props.onPressMoreDropdown();
                            }}
                          >
                            Spam
                          </p>
                          <div
                            role="separator"
                            className="dropdown-divider"
                            onClick={() => {
                              this.props.onPressMoreDropdown();
                            }}
                          ></div>
                          <p
                            className="dropdown-item"
                            onClick={() => {
                              this.props.onPressMoreDropdown();
                            }}
                          >
                            Delete
                          </p>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="pull-right ml-auto">
                    <div className="pagination-email d-flex">
                      <p>1-50/295</p>
                      <div className="btn-group m-l-20">
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <i className="fa fa-angle-left"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                        >
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mail-list">
                  <ul className="list-unstyled">
                    <li className="clearfix">
                      <div className="mail-detail-left">
                        <label className="fancy-checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            className="checkbox-tick"
                          />
                          <span></span>
                        </label>
                        <p className="mail-star active">
                          <i className="fa fa-star"></i>
                        </p>
                      </div>
                      <div className="mail-detail-right">
                        <h6 className="sub">
                          <p className="mail-detail-expand">Herman Beck</p>{" "}
                          <span className="badge badge-default mb-0">
                            Marketing
                          </span>
                        </h6>
                        <p className="dep">
                          <span className="m-r-10">[ThemeForest]</span>Lorem
                          Ipsum is simply dumm dummy text of the printing and
                          typesetting industry.
                        </p>
                        <span className="time">23 Jun</span>
                      </div>
                      <div className="hover-action">
                        <p className="btn btn-warning mr-2">
                          <i className="fa fa-archive"></i>
                        </p>
                        <button
                          type="button"
                          data-type="confirm"
                          className="btn btn-danger js-sweetalert"
                          title="Delete"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="mail-detail-left">
                        <label className="fancy-checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            className="checkbox-tick"
                          />
                          <span></span>
                        </label>
                        <p className="mail-star">
                          <i className="fa fa-star-o"></i>
                        </p>
                      </div>
                      <div className="mail-detail-right">
                        <h6 className="sub">
                          <p className="mail-detail-expand">Mary Adams</p>
                        </h6>
                        <p className="dep">
                          <span className="m-r-10">[Support]</span>There are
                          many variations of passages of Lorem Ipsum available,
                          but the majority
                        </p>
                        <span className="time">
                          <i className="fa fa-paperclip"></i> 22 Jun
                        </span>
                      </div>
                      <div className="hover-action">
                        <p className="btn btn-warning mr-2">
                          <i className="fa fa-archive"></i>
                        </p>
                        <button
                          type="button"
                          data-type="confirm"
                          className="btn btn-danger js-sweetalert"
                          title="Delete"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </li>
                    <li className="clearfix unread">
                      <div className="mail-detail-left">
                        <label className="fancy-checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            className="checkbox-tick"
                          />
                          <span></span>
                        </label>
                        <p className="mail-star">
                          <i className="fa fa-star-o"></i>
                        </p>
                      </div>
                      <div className="mail-detail-right">
                        <h6 className="sub">
                          <p className="mail-detail-expand">June Lane</p>
                          <span className="badge badge-info">Family</span>
                        </h6>
                        <p className="dep">
                          <span className="m-r-10">[Support]</span>Lorem Ipsum
                          is simply dummy text of the printing and typesetting
                          industry.
                        </p>
                        <span className="time">20 Jun</span>
                      </div>
                      <div className="hover-action">
                        <p className="btn btn-warning mr-2">
                          <i className="fa fa-archive"></i>
                        </p>
                        <button
                          type="button"
                          data-type="confirm"
                          className="btn btn-danger js-sweetalert"
                          title="Delete"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="mail-detail-left">
                        <label className="fancy-checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            className="checkbox-tick"
                          />
                          <span></span>
                        </label>
                        <p className="mail-star">
                          <i className="fa fa-star-o"></i>
                        </p>
                      </div>
                      <div className="mail-detail-right">
                        <h6 className="sub">
                          <p className="mail-detail-expand">Gary Camara</p>
                        </h6>
                        <p className="dep">
                          <span className="m-r-10">[CSS]</span>There are many
                          variations of passages of Lorem Ipsum available, but
                          the majority
                        </p>
                        <span className="time">14 Jun</span>
                      </div>
                      <div className="hover-action">
                        <p className="btn btn-warning mr-2">
                          <i className="fa fa-archive"></i>
                        </p>
                        <button
                          type="button"
                          data-type="confirm"
                          className="btn btn-danger js-sweetalert"
                          title="Delete"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="mail-detail-left">
                        <label className="fancy-checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            className="checkbox-tick"
                          />
                          <span></span>
                        </label>
                        <p className="mail-star">
                          <i className="fa fa-star-o"></i>
                        </p>
                      </div>
                      <div className="mail-detail-right">
                        <h6 className="sub">
                          <p className="mail-detail-expand">Frank Camly</p>
                          <span className="badge badge-danger">
                            Themeforest
                          </span>
                        </h6>
                        <p className="dep">
                          <span className="m-r-10">[WrapTheme]</span>Lorem Ipsum
                          is simply dumm dummy text of the printing and
                          typesetting industry.
                        </p>
                        <span className="time">
                          <i className="fa fa-paperclip"></i> 11 Jun
                        </span>
                      </div>
                      <div className="hover-action">
                        <p className="btn btn-warning mr-2">
                          <i className="fa fa-archive"></i>
                        </p>
                        <button
                          type="button"
                          data-type="confirm"
                          className="btn btn-danger js-sweetalert"
                          title="Delete"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </li>
                    <li className="clearfix">
                      <div className="mail-detail-left">
                        <label className="fancy-checkbox">
                          <input
                            type="checkbox"
                            name="checkbox"
                            className="checkbox-tick"
                          />
                          <span></span>
                        </label>
                        <p className="mail-star">
                          <i className="fa fa-star-o"></i>
                        </p>
                      </div>
                      <div className="mail-detail-right">
                        <h6 className="sub">
                          <p className="mail-detail-expand">Gary Camara</p>
                          <span className="badge badge-success">Work</span>
                        </h6>
                        <p className="dep">
                          <span className="m-r-10">[Awwwards]</span>There are
                          many variations of passages of Lorem Ipsum available,
                          but the majority
                        </p>
                        <span className="time">29 May</span>
                      </div>
                      <div className="hover-action">
                        <p className="btn btn-warning mr-2">
                          <i className="fa fa-archive"></i>
                        </p>
                        <button
                          type="button"
                          data-type="confirm"
                          className="btn btn-danger js-sweetalert"
                          title="Delete"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mail-detail-full d-none" id="mail-detail-open">
                  <div className="mail-action clearfix">
                    <div className="pull-left">
                      <div className="fancy-checkbox d-inline-block">
                        <label>
                          <input
                            className="select-all"
                            type="checkbox"
                            name="checkbox"
                          />
                          <span></span>
                        </label>
                      </div>
                      <div className="btn-group">
                        <p className="btn btn-outline-secondary btn-sm hidden-sm">
                          Refresh
                        </p>
                        <p className="btn btn-outline-secondary btn-sm hidden-sm">
                          Archive
                        </p>
                        <p className="btn btn-outline-secondary btn-sm">
                          Trash
                        </p>
                      </div>
                      <div className="btn-group show">
                        <button
                          className="btn btn-outline-secondary btn-sm dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                        >
                          Tags
                        </button>
                        <div className="dropdown-menu show">
                          <p className="dropdown-item">Tag 1</p>
                          <p className="dropdown-item">Tag 2</p>
                          <p className="dropdown-item">Tag 3</p>
                        </div>
                      </div>
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-secondary btn-sm dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          More
                        </button>
                        <div className="dropdown-menu">
                          <p className="dropdown-item">Mark as read</p>
                          <p className="dropdown-item">Mark as unread</p>
                          <p className="dropdown-item">Spam</p>
                          <div
                            role="separator"
                            className="dropdown-divider"
                          ></div>
                          <p className="dropdown-item">Delete</p>
                        </div>
                      </div>
                    </div>
                    <div className="pull-right ml-auto">
                      <p className="mail-back btn btn-outline-secondary btn-sm">
                        <i className="fa fa-close"></i>
                      </p>
                    </div>
                  </div>
                  <div className="detail-header">
                    <div className="media">
                      <div className="float-left">
                        <div className="m-r-20">
                          <img
                            src={require("../assets/images/sm/avatar1.jpg")}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="media-body">
                        <p className="mb-0">
                          <strong className="text-muted m-r-5">From:</strong>
                          <p className="text-default">
                            info@thememakker.com
                          </p>{" "}
                          <span className="text-muted text-sm float-right">
                            12:48, 23.06.2018
                          </span>
                        </p>
                        <p className="mb-0">
                          <strong className="text-muted m-r-5">To:</strong>Me{" "}
                          <small className="text-muted float-right">
                            <i className="zmdi zmdi-attachment m-r-5"></i>(2
                            files, 89.2 KB)
                          </small>
                        </p>
                        <p className="mb-0">
                          <strong className="text-muted m-r-5">CC:</strong>
                          <p className="text-default">mail@thememakker.com</p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mail-cnt">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took p galley of type and scrambled it to make p
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <p>
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took p galley of type and
                      scrnturies, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <hr />
                    <strong>Click here to</strong>
                    <p href="appinbox">Reply</p> or
                    <p href="appinbox">Forward</p>
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

MailInbox.propTypes = {};

const mapStateToProps = ({ mailInboxReducer }) => ({
  isTagDropDown: mailInboxReducer.isTagDropDown,
  isMoreDropDown: mailInboxReducer.isMoreDropDown,
});

export default connect(mapStateToProps, {
  onPressTagDropdown,
  onPressMoreDropdown,
  onPressCompose,
})(MailInbox);
