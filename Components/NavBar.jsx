import React, { Component, Fragment } from "react";
import { Nav, Image, Col, Tab, Row, Container } from "react-bootstrap";
import Logo from "./Logo.png";
import FeedList from "./FeedList";
import VideoList from "./VideoList";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        {/* <div>NavBar</div> */}
        <Container fluid>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
              <Col sm={3} className="nav_bar">
                <Image src={Logo} alt="Logo" className="logo" roundedCircle />
                <Nav variant="pills" className="flex-column tabs ">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      className="feed_tab nav-pills nav-links"
                    >
                      Feed
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      className="videos_tab nav-pills nav-links"
                    >
                      Videos
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <FeedList />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <VideoList />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </Fragment>
    );
  }
}

export default NavBar;
