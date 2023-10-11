import React from "react";
import { connect } from "react-redux";

class BlogListCard extends React.Component {
  render() {
    const { ImageUrl, HeaderText, Details } = this.props;

    return (
      <div className="card single_post">
        <div className="body">
          <div className="img-post">
            <img
              className="d-block img-fluid"
              src={ImageUrl}
              alt="First slide"
            />
          </div>
          <h3>
            <button href="blogdetails">{HeaderText}</button>
          </h3>
          <p>{Details}</p>
        </div>
        <div className="footer">
          <div className="actions">
            <button className="btn btn-outline-secondary">Continue Reading</button>
          </div>
          <ul className="stats">
            <li>
              <button>General</button>
            </li>
            <li>
              <button className="icon-heart">28</button>
            </li>
            <li>
              <button className="icon-bubbles">128</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BlogListCard);
