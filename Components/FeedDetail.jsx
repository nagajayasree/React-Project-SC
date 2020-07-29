import React, { Component, Fragment } from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./FeedDetail.css";

const VideoList = lazy(() => import("./VideoList"));

const FeedDetail = ({ match, history }) => {
  // console.log(match.params);
  return (
    <>
      <Container>
        <button className="backBtn" onClick={() => history.push("/feedlist")}>
          Back
        </button>
        {/* <div>Feed Detail of Article{match.params.id}</div> */}
        <Row>
          <Col sm={8} className="feed_detail">
            <h3 className="feed_title">{match.params.title}</h3>
            <p className="feed_desc">{match.params.desc}</p>
          </Col>
          <Col sm={3} className="vi_list">
              <!--<p>
              list of videos list of videos list of videos list of videos list
              of videos list of videos
            </p> -->
            <div>
              <Suspense fallback={<div>Loading....</div>}>
                <VideoList />
              </Suspense>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default FeedDetail;
