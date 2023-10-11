import React from "react";
import { connect } from "react-redux";

class UIColorsContextual extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Contextual text Colors</h2>
          </div>
          <div className="body">
            <p>
              classes also work well on anchors with the provided hover and
              focus states.{" "}
              <strong>
                Note that the{" "}
                <code className="highlighter-rouge">.text-white</code> and{" "}
                <code className="highlighter-rouge">.text-muted</code> class has
                no link styling.
              </strong>
            </p>
            <p>
              <button className="text-primary">Primary link</button>
            </p>
            <p>
              <button className="text-secondary">Secondary link</button>
            </p>
            <p>
              <button className="text-success">Success link</button>
            </p>
            <p>
              <button className="text-danger">Danger link</button>
            </p>
            <p>
              <button className="text-warning">Warning link</button>
            </p>
            <p>
              <button className="text-info">Info link</button>
            </p>
            <p>
              <button className="text-light bg-dark">Light link</button>
            </p>
            <p>
              <button className="text-dark">Dark link</button>
            </p>
            <p>
              <button className="text-muted">Muted link</button>
            </p>
            <p>
              <button className="text-white bg-dark">White link</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIColorsContextual);
