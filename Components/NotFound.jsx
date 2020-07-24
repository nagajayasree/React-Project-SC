import React from "react";
import err from "./errorImg.PNG";
import { Image, Row, Col } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
        <h1>
        <Row>
          <Col sm={12}>
            <h4 style={{ textAlign: "center", marginTop: "30px" }}>
              Page Not Found!
            </h4>
            <Image
              style={{ marginTop: "50px", marginLeft: "220px" }}
              src={err}
              alt="image"
            />
          </Col>
        </Row>
      </h1>
    </div>
  );
};

export default NotFound;
