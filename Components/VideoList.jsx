import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./VideoList.css";
import { getvideoPosts } from "../DataServices/fakeVideoPostService";
import AddPagination from "../OtherComponents/AddPagination";
import { paginate } from "../OtherComponents/paginate";
import SearchBar from "../OtherComponents/SearchBar";
import _ from "lodash";

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPosts: [],
      currentPage: 1,
      pageSize: 3,
      sortPosts: { path: "title", order: "desc" },
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.setState({ videoPosts: getvideoPosts() });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  // handleSort = (path) => {
  //   this.setState({ sortPosts: { path, order: "desc" } });
  // };

  render() {
    const {
      videoPosts,
      currentPage,
      sortPosts,
      pageSize,
      searchQuery,
      videoPosts: allPosts,
    } = this.state;

    let filtered = allPosts;
    if (searchQuery)
      filtered = allPosts.filter((p) =>
        p.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortPosts.path], [sortPosts.order]);

    const VideoPosts = paginate(sorted, currentPage, pageSize);

    return (
      <Fragment>
        <Container fluid>
          <Col sm={10} className="video_col_1">
            <Col sm={9}>
              <SearchBar
                value={searchQuery}
                onChange={this.handleSearch}
                classes="form-comtrol my-3 video_search"
              />
            </Col>
            <p>Videos</p>
            <Row className="video_row">
              {VideoPosts.map((e) => {
                return (
                  <ul key={e.id} className="video_item">
                    <Card className="video_card">
                      {/* <Card.Img className="video_img" src={img} alt="image" /> */}
                      <iframe
                        className="video_link"
                        src={e.link}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; 
                      picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <Card.Body className="video_body">
                        <span className="video_content">
                          <Link
                            to={`/videoDetail/${e.id}/${e.title}/${e.description}/${e.link}`}
                          >
                            <Card.Title className="video_title">
                              <h5>{e.title}</h5>
                            </Card.Title>
                            <Card.Text className="video_desc">
                              <span>{e.description}</span>
                            </Card.Text>
                          </Link>
                        </span>
                      </Card.Body>
                    </Card>
                  </ul>
                );
              })}
            </Row>
            <AddPagination
              postsCount={videoPosts.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </Col>
        </Container>
      </Fragment>
    );
  }
}

export default VideoList;
