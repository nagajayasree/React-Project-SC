import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import img from "./dawn.jpg";
import "./VideoList.css";

class VideoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          id: 1,
          title: "Video Title 1",
          desc: "Some Description of the Video",
        },
        {
          id: 2,
          title: "Video Title 2",
          desc: "Some Description of the Video",
        },
        {
          id: 3,
          title: "Video Title 3",
          desc: "Some Description of the Video",
        },
        {
          id: 4,
          title: "Video Title 4",
          desc: "Some Description of the Video",
        },
        {
          id: 5,
          title: "Video Title 5",
          desc: "Some Description of the Video",
        },
        {
          id: 6,
          title: "Video Title 6",
          desc: "Some Description of the Video",
        },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <div>VideoList</div>
        <Container fluid>
          <Row>
            <Col sm={9} className="video_col_1">
              {this.state.videos.map((e) => {
                return (
                  <ul key={e.id} className="video_item">
                    <a>
                      <div>
                        <Card className="video_card">
                          <Card.Img
                            className="video_img"
                            src={img}
                            alt="image"
                          />
                          <Card.Body className="video_body">
                            <div className="video_content">
                              <Link
                                to={`/videoDetail/${e.id}/${e.title}/${e.desc}/${e.link}`}
                                >
                                <Card.Title className="video_title">
                                  <h5>{e.title}</h5>
                                </Card.Title>
                              </Link>
                              <Card.Text className="video_desc">
                                <p>{e.desc}</p>
                              </Card.Text>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </a>
                  </ul>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default VideoList;
