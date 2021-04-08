import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  CardDeck,
} from "reactstrap";
import { PERSON_CARDS } from "../shared/personCards";

// PersonCard - Functional Component
const PersonCard = (props) => {
  return (
    <Card className="personCard">
      <CardImg src={props.person.image} alt={props.person.name} />
      <CardBody className="m-2" color="secondary">
        <CardTitle tag="h4">{props.person.name}</CardTitle>
        <CardSubtitle className="my-2" tag="h5">
          {props.person.title}
        </CardSubtitle>
        <CardText>{props.person.description}</CardText>
      </CardBody>
    </Card>
  );
};

// OurTeam - Class Component
class OurTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personCards: PERSON_CARDS,
    };
  }
  render() {
    return (
      <Container fluid className="bg-light py-3">
        <h2 className="text-center py-2">MEET OUR TEAM</h2>
        <Row className="my-5">
          <Col md="10" className="mx-auto">
            <CardDeck>
              <PersonCard key="1" person={this.state.personCards[0]} />
              <PersonCard key="2" person={this.state.personCards[1]} />
              <PersonCard key="3" person={this.state.personCards[2]} />
            </CardDeck>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md="10" className="mx-auto">
            <CardDeck>
              <PersonCard key="4" person={this.state.personCards[3]} />
              <PersonCard key="5" person={this.state.personCards[4]} />
              <PersonCard key="6" person={this.state.personCards[5]} />
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OurTeam;
