import React from "react";
import VideoList from "./VideoList";
import { Container, Row, Col } from "react-bootstrap";
import "./VideoDetail.css";

const VideoDetail = ({ match, history }) => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8} className="video_detail">
            <iframe
              width="650"
              height="415"
              src={match.params.link}
                src="https://www.youtube.com/embed/kT9sNV9iwRE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h3 className="videoDetail_title">{match.params.title}</h3>
            <p className="videoDetail_desc">{match.params.desc}</p>
            <div className="videoDetail_feedList">
              <FeedList />
            </div>
          </Col>
          <Col sm={3} className="vdeo_list">
            <VideoList />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default VideoDetail;
