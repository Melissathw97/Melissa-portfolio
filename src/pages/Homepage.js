import React from 'react';
import Navbar from "../components/Navbar"
import { Container, Row, Col, Button } from "reactstrap"
import styles from "./Homepage.module.css"
import profilePic from "../assets/images/image2.jpg"

const Homepage = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col md={7}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa maxime animi molestias accusamus repellendus voluptates sequi tempore sit! Similique officia repudiandae illum unde temporibus quos, eligendi omnis nemo sapiente.</p>
        </Col>
        <Col md={5}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eum, fugit modi adipisci cum ut molestias voluptate quo quam id provident inventore molestiae impedit temporibus delectus est, sit obcaecati a?
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Homepage
