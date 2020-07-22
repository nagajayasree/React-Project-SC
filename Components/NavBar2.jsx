import React, { Component, Fragment } from "react";
import { Nav, Image, Col, Row, Container } from "react-bootstrap";
import Logo from "./Logo.png";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import FeedList from "./FeedList";
import VideoList from "./VideoList";
import FeedDetail from "./FeedDetail";
import NotFound from "./NotFound";
import "./NavBar2.css";

class NavBar2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col sm={3} className="navBar">
              <Image src={Logo} alt="Logo" className="logo" roundedCircle />
              <Nav variant="pills" className="flex-column tabs ">
                <Link to="/feedlist" className="feed_tab nav-pills nav-links">
                  Feed
                </Link>
                <Link to="/videolist" className="videos_tab  nav-links">
                  Videos
                </Link>
              </Nav>
            </Col>
            <Col sm={9}>
              <Switch>
                <Route path="/feedlist" component={FeedList} />
                <Route path="/videolist" component={VideoList} />
                <Route path="/feedDetail" component={FeedDetail} />
                <Redirect from="/feeds" to="/feedlist" />
                <Redirect from="/videos" to="/videolist" />
                <Route from="/feed" component={NotFound} />
                <Route from="/video" component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NavBar2;
