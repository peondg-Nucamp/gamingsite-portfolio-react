import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Button,
} from "reactstrap";
import { GAME_CARDS } from "../shared/gameCards";

// HeaderSection - Functional Component
function HeaderSection() {
  return (
    <div className="row align-items-center p-5">
      <div className="col-6 text-center">
        <h2>What is All Your Base Games?</h2>
      </div>
      <div className="col-6">
        <p>
          All Your Base Games is an independent company that was started in
          Miami, Florida by Mike Adams and Timothy Jameson. They grew up playing
          video games since the early 80's when they both started with the Atari
          2600. In 2007, they decided to share their nostalgia of games from
          several eras by developing games that incorporate many elements of
          design both new and old. It is their hope that their projects will
          renew the spirit of gamers to embrace and appreciate all things in the
          world of gaming.
        </p>
      </div>
    </div>
  );
}

// HeaderImageSection - Functional Component
function HeaderImageSection() {
  return (
    <Row>
      <Col md="12" id="backgroundImageContainer" className="bg-dark fill" />
    </Row>
  );
}

// GamesSection - Class Component
class GamesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCards: GAME_CARDS,
    };
  }
  render() {
    return (
      <div className="row pb-4">
        <div className="col">
          <div className="card-deck">
            {this.state.gameCards.map((gameCard) => (
              <GameCard key={gameCard.id} gameCard={gameCard} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// GameCard - Class Component to render a single Game Card
class GameCard extends Component {
  render() {
    return (
      <React.Fragment>
        <Card className="bg-secondary ml-xl-5 mr-xl-5">
          <CardBody>
            <CardImg
              src={this.props.gameCard.image}
              className="card-img-top img-fluid mb-3 rounded mx-auto d-block"
              alt={this.props.gameCard.name}
            />
            <CardTitle tag="h5" className="text-center">
              {this.props.gameCard.name}
            </CardTitle>
            <CardText>
              {this.props.gameCard.description}
              {this.props.gameCard.similar_games.map((game) => (
                <GameButtonModal key={game.id} game={game} />
              ))}
            </CardText>
            <hr />
            <p
              className="text-center my-auto"
              data-toggle="tooltip"
              data-placement="top"
              title="More Info Coming Soon"
            >
              Coming {this.props.gameCard.release_date}
            </p>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

// GameModal - Class Component to render a button and modal for a single game
class GameButtonModal extends Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }
  toggle = () => {
    console.log("modalOpen before = " + this.state.modalOpen);
    console.log("attempting to change modalopen prop");
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
    console.log("modalOpen after = " + this.state.modalOpen);
  };
  render() {
    return (
      <React.Fragment>
        <Button color="link" onClick={this.toggle}>
          {this.props.game.name}
        </Button>
        <Modal
          id={this.props.game.id}
          isOpen={this.state.modalOpen}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.props.toggle}>
            <p id={this.props.game.id} className="modal-title">
              {this.props.game.name}
            </p>
          </ModalHeader>
          <ModalBody>
            <img
              src={this.props.game.image}
              alt={this.props.game.name}
              className="d-block w-75 mx-auto mb-4"
            />
            <p>{this.props.game.description}</p>
            <blockquote>Sources ~ {this.props.game.sources}</blockquote>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

// Main Home Component - Class component to render the following:
// 1 - HeaderImageSection
// 2 - HeaderSection
// 3 - GamesSection
class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderImageSection />
        <HeaderSection />
        <GamesSection />
      </div>
    );
  }
}

export default Home;
