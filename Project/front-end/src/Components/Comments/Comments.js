import React from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBIcon,
  MDBMedia,
  MDBBtn,
  MDBPageItem,
  MDBPagination,
  MDBPageNav
} from "mdbreact";

/**
 * @module BlogComponentsPage
 * @extends Component
 */

class BlogComponentsPage extends React.Component {
  /**
   *
   * @param {*} props
   * @type {object}
   */
  constructor(props) {
    super(props);
    this.state = {
      Persons:[]
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:3030/Persons/read")
  //     .then(response => response.json())
  //     .then(Persons => {
  //       this.setState({ Persons: Persons.results });
  //     });
  // }

  /**
   * Renders the component.
   * @function
   * @return {BlogComponentsPage} markup
   *
   */
  render() {
    return (
      <MDBContainer>
        <MDBCardHeader className="border-0 font-weight-bold">
          <p className="mr-4 mb-0">4 comments</p>
        </MDBCardHeader>

        <MDBMedia className="d-block d-md-flex mt-4">
          <img
            className="card-img-64 d-flex mx-auto mb-3"
            src={`http://localhost:3030/Profile_Images/${this.props.user.user.Image}`}
            alt=""
          />
          <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
            <h5 className="font-weight-bold mt-0">
              {this.props.user.user.Name}
              <MDBIcon icon="reply" className="pull-right ml-2" />
            </h5>
            OMG I LOVE THIS !! I'm definetly trying out these awesome tips.
            <MDBMedia className="d-block d-md-flex mt-4">
              <img
                className="card-img-64 d-flex mx-auto mb-3"
                src={require("../../Assets/profile2.jpg")}
                alt=""
              />
              <MDBMedia body className="text-center text-md-left ml-md-3 ml-0">
                <h5 className="font-weight-bold mt-0">
                  Ella Smith
                  <MDBIcon icon="reply" className="pull-right ml-2" />
                </h5>
               AHHHHH I know right ? They're just too good for us...what is this blessing we don't deserve this
                <div className="form-group mt-4">
                  <label htmlFor="quickReplyFormComment">Your comment</label>
                  <textarea
                    className="form-control"
                    id="quickReplyFormComment"
                    rows="5"
                  ></textarea>
                  <div className="text-center my-4">
                    <MDBBtn size="sm" color="primary">
                      Post
                    </MDBBtn>
                  </div>
                </div>
              </MDBMedia>
            </MDBMedia>
          </MDBMedia>
        </MDBMedia>
      </MDBContainer>
    );
  }
}

export default BlogComponentsPage;
