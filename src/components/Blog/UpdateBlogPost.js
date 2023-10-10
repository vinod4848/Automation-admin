import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import industriesData from "../../industry.json";
import JoditEditor from "jodit-react";
import "react-datepicker/dist/react-datepicker.css";
import reactS3 from "react-s3";

class UpdateBlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: "",
      brief: "",
      keyword: "",
      categories: [],
      newCategory: "",
      industries: [],
      selectedIndustry: "",
      slug: "",
      metaDescription: "",
      imageUrl: "",
    };
  }

  async componentDidMount() {
    this.fetchCategories();
    const { industries } = industriesData;
    this.setState({ industries });
    const postId = this.props.match.params.postId;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/post/posts/${postId}`
      );
      const postData = response.data;
      console.log("postData::: ", postData);

      this.setState({
        title: postData.post.title,
        description: postData.post.description,
        category: postData.post.category,
        selectedIndustry: postData.post.selectedIndustry,
        brief: postData.post.brief,
        keyword: postData.post.keyword,
        slug: postData.post.slug,
        metaDescription: postData.post.metaDescription,
        image: postData.post.image,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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

          const awsResponse = await reactS3.uploadFile(file, config);

          if (awsResponse.location !== "") {
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

  handleUpdatePost = async () => {
    const {
      title,
      description,
      category,
      selectedIndustry,
      brief,
      keyword,
      slug,
      metaDescription,
      imageUrl,
    } = this.state;
    const postId = this.props.match.params.postId;
    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/post/update/${postId}`,
        {
          title,
          description,
          category,
          selectedIndustry,
          brief,
          keyword,
          slug,
          metaDescription,
          image: imageUrl,
        }
      );

      this.props.history.push(`/blogdetails/${postId}`);
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
      this.setState({ categories });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const inputText = event.target.value;
    this.setState({ keyword: inputText });

    const hashtags = inputText.split(" ").map((word) => "#" + word);
    console.log(hashtags);
  };
  handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (this.isMediaFile(file)) {
      this.setState({ userFile: event.target.files });
    } else {
      document.getElementById("fileUpload").reset();
      window.alert("Invalid file type");
    }
  };

  handleEditorChange = (content) => {
    this.setState({ description: content });
  };

  handleYouTubeUrlChange = (event) => {
    const youtubeUrl = event.target.value;
    this.setState({ youtubeUrl });
  };
  handleNewCategoryChange = (event) => {
    const newCategory = event.target.value;
    this.setState({ newCategory });
  };

  addNewCategory = async () => {
    const { newCategory } = this.state;
    if (typeof newCategory === "string" && newCategory.trim() !== "") {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/categories/createcategory`,
          { name: newCategory }
        );
        const addedCategory = response.data;

        this.setState((prevState) => ({
          categories: [...prevState.categories, addedCategory],
          newCategory: "",
        }));
      } catch (error) {
        console.log(error);
      }
    }
  };
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleBriefChange = (event) => {
    this.setState({
      brief: event.target.value,
    });
  };
  handleIndustryChange = (event) => {
    this.setState({ selectedIndustry: event.target.value });
  };

  render() {
    const {
      title,
      category,
      brief,
      categories,
      selectedIndustry,
      industries,
      keyword,
      scheduled,
      metaDescription,
    } = this.state;

    return (
      <div className="card">
        <div className="body">
          <div className="form-group">
            <input
              type="text"
              value={title}
              className="form-control"
              placeholder="Enter Blog title"
              id="blogTitle"
              onChange={this.handleTitleChange}
            />
          </div>
          <div className="form-group">
            <select className="form-control show-tick" id="categorySelect">
              <option>{category}</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
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
              placeholder="Enter New Category"
              id="newCategory"
              onChange={this.handleNewCategoryChange}
            />
            <button
              type="button"
              className="btn btn-primary mt-2"
              onClick={this.addNewCategory}
            >
              Add New Category
            </button>
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
              type="text"
              value={brief}
              className="form-control"
              placeholder="Enter a brief description"
              id="brief"
              onChange={this.handleBriefChange}
            />
          </div>
          <JoditEditor
            value={this.state.description}
            config={{ readonly: false }}
            tabIndex={1}
            onBlur={(text) => this.handleEditorChange(text)}
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
              value={metaDescription}
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
              if (scheduled) {
                this.setState({ redirectToList: true }, () => {
                  this.schedulePost();
                });
              } else {
                this.handleUpdatePost();
              }
            }}
          >
            Update Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isEventModal: mailInboxReducer.isEventModal,
});

export default withRouter(connect(mapStateToProps, {})(UpdateBlogPost));
