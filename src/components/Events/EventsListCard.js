import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DynamicMetaTags from "../../utils/DynamicMetaTags";

class EventsListCard extends React.Component {
  handleClick = (eventId) => {
    this.props.history.push(`/events/${eventId}`);
  };

  render() {
    const {
      FileArray = [],
      title,
      brief,
      eventId,
      website,
      description,
      eventType,
      organiserName,
      organiserEmail,
      organiser_number,
      startTime,
      startDate,
      endDate,
      venue,
      city,
      state,
      country,
    } = this.props;

    const fileUrl = FileArray[0].fileUrl;
    const fileType = FileArray[0].fileType;
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
        <DynamicMetaTags pageTitle={title} pageDescription={brief} />
        <div className="card event_card">
          <div className="body">
            <div className="img-post">
              {fileType.includes("video") && (
                <video className="d-block img-fluid" controls>
                  <source src={FileArray[0].fileUrl} />
                </video>
              )}
              {fileType.includes("image") && (
                <img
                  style={{width:"300px", height:"300px"}}
                  className="d-block img-fluid"
                  src={fileUrl}
                  alt="First slide"
                />
              )}
              {fileType.includes("youtube") && (
                <iframe
                  width="560"
                  height="315"
                  src={fileUrl}
                  title="YouTube video player"
                  frameorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  controls
                ></iframe>
              )}
            </div>
            <h3>
              {title}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: description }} style={{fontSize:"15px"}}/>
          </div>
          <div className="footer">
            <div className="event-info" style={{marginLeft:"20px", fontSize:"15px"}}>
              <div>Brief: {brief}</div>
              <div>Website: {website}</div>
              <div>Event Type: {eventType}</div>
              <div>Organiser Name: {organiserName}</div>
              <div>Organiser Email: {organiserEmail}</div>
              <div>Venue: {venue}</div>
              <div>City: {city}</div>
              <div>State: {state}</div>
              <div>Country: {country}</div>
              <div>Organiser Number: {organiser_number}</div>
              <div>Start Time: {startTime}</div>
              <div>Start Date: {formatDate(startDate)}</div>
              <div>End Date: {formatDate(endDate)}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default withRouter(connect(mapStateToProps, {})(EventsListCard));
