import React, { Component } from "react";
import "./Editor.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Text: "",
      date: new Date().toLocaleString(),
      Type: ""
    };
  }

  handleChange = event => {
    //console.log(event);

    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const body = new FormData();
    const { Title, Text, date, Type } = this.state;
    body.append("Title", Title);
    body.append("date", date);
    body.append("Text", Text);
    body.append("Type", "blog");
    body.append("Persons_Persons_id", this.props.user.user.Persons_id);
    console.log(
      "here",
      Title,
      date,
      Text,
      Type,
      this.props.user.user.Persons_id
    );
    fetch("http://localhost:3030/Posts/add", {
      method: "post",
      header:{
      body:FormData
      }
    })
      .then(response => response.json())
      .then(data => {
        const { success, message } = data;
        if (success) {
          alert("You have successfully uploaded a post");
        } else {
          this.setState({
            error: message
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: err
        });
      });
  };
  render() {
    const { Text, Title, date, Type } = this.state;
    return (
      <div>
        <form className="blog-form">
          <input
            className="Title-input"
            name={"Title"}
            value={Title}
            onChange={this.handleChange}
            placeholder="Title"
          />
          <br />
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello</p>"
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log(data);
              this.setState({ Text: data });
            }}
          />
          <br />
          <button onClick={e => this.handleSubmit(e)}>Save changes</button>
        </form>
      </div>
    );
  }
}

export default Editor;
