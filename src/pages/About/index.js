import React from "react";
import Wrapper from "../../components/Wrapper";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Grid from "@material-ui/core/Grid";
import "./aboutstyle.css";

export default function Homepage() {
  return (
    <Wrapper>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            Born and raised in Southern California, my name is Chad Lew and I
            guess the first two things you could say about me is that I like to
            read and I like to code. My passion for coding is fueled by endless
            learning and enjoyment through the internet and mentors. I'm a
            father, mentor, mentee, coder, lover, and friend. My hobbies would
            consist of mainly coding new js libraries to try out,
            reading/listening to books (audible is the best), and working. Some
            other stuff i'm passionate about are sociology, psychology,
            investing, cartoons, cryptocurrency, pokemon, osrs, netflix shows
            (hah!), and everything apple related.
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Grid item lg={6}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf5dOsjtfJggOCOS-ljsuOS2BoBBlyMRA7dSLzuk1fzDOzQCA/viewform?embedded=true"
              width="640"
              height="717"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="budget"
            ></iframe>
          </Grid>
        </Row>
      </Container>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Grid item lg={6}>
            <embed
              src="./assets/pdf/resume.pdf"
              width="1000px"
              height="700px"
            />
          </Grid>
        </Row>
      </Container>
    </Wrapper>
  );
}
