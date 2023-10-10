import React from "react";
import { connect } from "react-redux";
import JoditEditor from "jodit-react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ReactS3 from "react-s3";
import industriesData from "../../industry.json";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BlogPostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      keyword: "",
      categories: [],
      newCategory: "",
      industries: [],
      selectedIndustry: "",
      slug: "",
      metaDescription: "",
      imageFile: null,
      imageUrl: "",
      scheduledDate: null,
    };
  }

  componentDidMount() {
    this.fetchCategories();
    const { industries } = industriesData;
    this.setState({ industries });
  }

  handleImageUpload = async (event) => {
    try {
      const file = event.target.files[0];

      if (file) {
        const maxFileSize = 100 * 1024;

        if (file.size <= maxFileSize) {
          const config = {
            bucketName: "mif-bucket",
            region: "ap-south-1",
            accessKeyId: "AKIAQPOZMTKKXS7QDAGZ",
            secretAccessKey: "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",
          };

          const awsResponse = await ReactS3.uploadFile(file, config);

          if (awsResponse.location !== "") {
            // Update the state with the S3 URL
            this.setState({ imageUrl: awsResponse.location });
          } else {
            throw new Error("AWS Upload Error");
          }
        } else {
          throw new Error("File size exceeds the maximum limit of 100KB");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleDateChange = (date) => {
    this.setState({ scheduledDate: date });
  };

  postData = async () => {
    try {
      const {
        description,
        keyword,
        selectedIndustry,
        slug,
        imageUrl,
        scheduledDate,
      } = this.state;

      const blogTitle = document.getElementById("blogTitle").value;
      const category = document.getElementById("categorySelect").value;
      const brief = document.getElementById("brief").value;
      const metaDescription = document.getElementById("metaDescription").value;

      const obj = {
        title: blogTitle,
        category: category,
        description: description,
        selectedIndustry: selectedIndustry,
        brief: brief,
        keyword: keyword,
        slug: slug,
        image: imageUrl,
        metaDescription: metaDescription,
        scheduledDate: scheduledDate,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/post/create`,
        obj
      );

      if (response) {
        if (this.state.redirectToList) {
          this.props.history.push(`/blogdetails/${response.data._id}`);
        } else {
          this.props.history.push("/bloglist");
        }
      } else {
        throw new Error("Mongo DB Upload Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/categories/getallcategories`
      );
      const categories = response.data;
      console.log(categories, "bsfebshbfshf");
      this.setState({ categories });
    } catch (error) {
      console.log(error);
      // Handle the error
    }
  };

  handleChange = (event) => {
    const inputText = event.target.value;
    this.setState({ keyword: inputText });

    // Convert text to hashtags
    const hashtags = inputText.split(" ").map((word) => "#" + word);
    console.log(hashtags); // Output the converted hashtags to the console for demonstration
  };

  handleEditorChange = (content) => {
    this.setState({ description: content });
  };

  handleIndustryChange = (event) => {
    this.setState({ selectedIndustry: event.target.value });
  };

  render() {
    const { keyword } = this.state;
    const { categories } = this.state;
    const { industries, selectedIndustry } = this.state;
    return (
      <div className="card">
        <div className="body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Blog title"
              id="blogTitle"
            />
          </div>
          <div className="form-group">
            <select className="form-control show-tick" id="categorySelect">
              <option>Select Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Schedule Date & time:</label>
            <ReactDatePicker
              selected={this.state.scheduledDate}
              onChange={this.handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={5}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Select date and time"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter New Category"
              id="newCategory"
              onChange={this.handleNewCategoryChange}
            />
            {/* No need for the "Add New Category" button */}
          </div>
          <div>
            <select
              className="form-control show-tick"
              id="industry"
              value={selectedIndustry}
              onChange={this.handleIndustryChange}
            >
              <option value="">Select Industry</option>
              {industries.map((industry, index) => (
                <option key={index} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ marginTop: "15px" }}>
            <input
              type="file"
              className="form-control-file"
              id="imageUpload"
              accept="image/*"
              onChange={this.handleImageUpload}
            />
            <medium id="fileHelp" className="form-text text-muted">
              Upload a file smaller than 100kb
            </medium>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a brief description"
              id="brief"
            />
          </div>
          <JoditEditor
            value={this.state.description}
            config={{ readonly: false }}
            tabIndex={1}
            onBlur={(text) => this.handleEditorChange(text)} // Call handleEditorChange when the editor content changes
          />
          <div className="form-group my-3">
            <input
              type="text"
              value={keyword}
              placeholder="Enter Tags for the Post"
              className="form-control"
              onChange={this.handleChange}
            />
            <small id="fileHelp" className="form-text text-muted">
              Enter (space) after every keyword{" "}
            </small>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter a Meta description"
              id="metaDescription"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter the Slug"
              id="slug"
              value={this.state.slug}
              onChange={(event) => this.setState({ slug: event.target.value })}
            />
            <small id="fileHelp" className="form-text text-muted">
              Enter (-) after every word{" "}
            </small>
          </div>

          <button
            type="button"
            className="btn btn-block btn-danger m-t-20 "
            onClick={() => {
              this.postData();
            }}
          >
            Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isEventModal: mailInboxReducer.isEventModal,
});

export default withRouter(connect(mapStateToProps, {})(BlogPostCard));
