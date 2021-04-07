import { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
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
              <GameCard gameCard={gameCard} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// Modal - Class Component to render a gameCard's Modal
class gameModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  render() {
    return (
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        <ModalHeader toggle={this.toggleModal}>
          {this.props.gameCard.similar_games[0].name}
        </ModalHeader>
        <ModalBody>
          {this.props.gameCard.similar_games[0].description}
        </ModalBody>
      </Modal>
    );
  }
}

// GameCard - Class Component to render a single Game Card
class GameCard extends Component {
  render() {
    return (
      <>
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
              <span data-toggle="modal" data-target="#shiningForceModal">
                {/* eslint-disable-next-line */}
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="See background info"
                >
                  {this.props.gameCard.similar_games[0].name}
                </a>
              </span>{" "}
              and{" "}
              <span data-toggle="modal" data-target="#fireEmblemModal">
                {/* eslint-disable-next-line */}
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="See background info"
                >
                  {this.props.gameCard.similar_games[1].name}.
                </a>
              </span>
            </CardText>
            <hr />
            <p
              className="text-center"
              data-toggle="tooltip"
              data-placement="top"
              title="More Info Coming Soon"
            >
              Coming {this.props.gameCard.release_date}
            </p>
          </CardBody>
        </Card>
      </>
    );
  }
}

// Main Home Component - Class component to render the following:
// 1 - HeaderSection
// 2 - GamesSection
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
