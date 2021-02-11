import React from "react";
import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

function Homepage() {
  return (
    <div>
      <Hero backgroundImage="https://mikeputnamphoto.com/wp-content/uploads/2019/01/Alpine-Reflection-1-0x0.jpg">
        <h1>chad lew</h1>
        <h2>web develobrrrrrr</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Friend, dad, life-long student, web developer.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <br></br>
            <br></br>
            <br></br>

            <h4>
              <em>
                Thanks for coming to my website. This is a website detailing my
                profile and projects guided by the navigation bar on top. I have
                many more projects that I would love to finish and deploy which
                will be coming soon. This personal website would be the start of
                the journey of acceptance for work to an employer. I am
                currently looking for any type of work relating to software
                development. I'm friendly to work with and love encouraging and
                working with teammates. I have a 3 year old daughter that I
                absolutely love spending time and hanging out with (she'll learn
                to code React one day). Enjoy the website, more updates coming
                soon.
              </em>
            </h4>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h6>
              Here's to the crazy ones. The misfits. The rebels. The
              troublemakers. The round pegs in the square holes. The ones who
              see things differently. They're not fond of rules. And they have
              no respect for the status quo. You can quote them, disagree with
              them, glorify or vilify them. About the only thing you can't do is
              ignore them. Because they change things. They push the human race
              forward. And while some may see them as the crazy ones, we see
              genius. Because the people who are crazy enough to think they can
              change the world, are the ones who do.”
              <br></br>
              <br></br>&emsp; &emsp; &emsp; - Steve Jobs, Rob Siltanen
            </h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
