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
    this.state = {
          tabSelected: "",
};
  }
  
    activateTab = (path) => {
    this.setState({ tabSelected: path });
  };
  
  render() {
        const { tabSelected } = this.state;
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col sm={3} className="navBar">             
              <Link to="/feed">
              <Image src={Logo} alt="Logo" className="logo" roundedCircle />
              </Link>
              <Nav variant="pills" className="flex-column tabs ">
                   <Link
                  to="/feed"
                  className={
                    tabSelected === "Feed
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                onClick={() => this.activateTab("Feed")}
                >
                  Feed
                </Link>
                <Link
                  to="/videos"
                  className={
                    tabSelected === "Videos"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                onClick={() => this.activateTab("Audios")}
                 >
                  Videos
                </Link>
                <Link
                  to="/audios"
                  className={
                    tabSelected === "Audios"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                onClick={() => this.activateTab("Audios")}
                >
                  Audios
                </Link>
                <Link
                  to="/addBlog"
                  className={
                    tabSelected === "AddBlog"
                      ? "tabs nav-link active"
                      : "tabs nav-link"
                  }
                onClick={() => this.activateTab("AddBlog")}
                >
                  Add Your Blog
                </Link>
              </Nav>
            </Col>
            <Col sm={9}>
              <Switch>
                ///displays the feedDetails of selected feedlist
                <Route
                  path="/feedDetail/:id/:title/:desc"
                  component={FeedDetail}
                />
                <Route
                  path="/videoDetail/:id/:title/:desc/:link"
                  component={VideoDetail}
                />
                <Route path="/feed" component={FeedList} />
                <Route path="/videos" component={VideoList} />
                <Route path="/audios" component={Audios} />
                <Route path="/addBlog" component={AddBlog} />
                ///displays this page automatically when page is loaded
                <Redirect from="/" exact to="/feedlist"></Redirect>
                <Route path="/feedDetail" component={FeedDetail} />
                <Redirect from="/feeds" to="/feedlist" />
                <Redirect from="/videos" to="/videolist" />
                ///displays NotFound comp if url doesn't match with the above
                paths
                <Route to="/not-found" component={NotFound} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NavBar2;
