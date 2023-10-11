/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class BlogListCard extends React.Component {
  static counter = 1;

  constructor(props) {
    super(props);
    this.state = {
      serial: BlogListCard.counter,
    };
    BlogListCard.counter++;
  }

  handleCLick = (postId) => {
    this.props.history.push(`/events/${postId}`);
  };

  handleDeleteClick = (postId) => {
    this.props.onDeleteClick(postId);
  };

  handleTagClick = (keyword) => {
    this.props.filterBlogsByKeyword(keyword);
    this.props.history.push(`/bloglist?keyword=${keyword}`);
  };

  componentDidMount() {
    this.setState((prevState) => ({ serial: prevState.serial + 1 }));
  }

  render() {
    const { serial } = this.state;
    const { HeaderText, postId, organiserName, createdAt } = this.props;

    const formatDate = (dateString) => {
      const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
      };
      const date = new Date(dateString);
      const formattedDate = date.toLocaleString("en-US", options);
      const day = date.getDate();
      let daySuffix = "th";
      if (day === 1 || day === 21 || day === 31) {
        daySuffix = "st";
      } else if (day === 2 || day === 22) {
        daySuffix = "nd";
      } else if (day === 3 || day === 23) {
        daySuffix = "rd";
      }

      return formattedDate.replace(/(\d+)/, `$1${daySuffix}`);
    };

    return (
      <>
        <tbody className="danger">
          <tr>
            <td>{serial}</td>
            <td>{HeaderText}</td>
            <td>{organiserName}</td>
            <td>{formatDate(createdAt)}</td>
            <td>
              <a href={`/events/${postId}`}>Read More</a>
              <span style={{ marginLeft: "10px" }}>
                <FaTrash
                  onClick={() => {
                    this.handleDeleteClick(postId);
                  }}
                  className="delete-icon"
                />
                
              </span>
            </td>
          </tr>
        </tbody>
      </>
    );
  }
}

const mapStateToProps = () => ({});

export default withRouter(connect(mapStateToProps, {})(BlogListCard));
