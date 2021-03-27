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
} from "reactstrap";

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

// GamesSection - Functional Component
function GamesSection() {
  return (
    <div className="row pb-4">
      <div className="col">
        <div className="card-deck">
          <GameCard />
        </div>
      </div>
    </div>
  );
}

// GameCard - Class Component to render a single Game Card
class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <>
        <Card className="bg-secondary ml-xl-5 mr-xl-5">
          <CardBody>
            <CardImg
              src="/images/games/village-protectors.png"
              className="card-img-top img-fluid mb-3 rounded mx-auto d-block"
              alt="Village Protectors Screenshot"
            />
            <CardTitle tag="h5" className="text-center">
              Village Protectors
            </CardTitle>
            <CardText>
              Village Protectors is an isometric style RPG-Strategy with
              gameplay similar to
              <span data-toggle="modal" data-target="#fireEmblemModal">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="See background info"
                >
                  Fire Emblem
                </a>
              </span>
              and
              <span data-toggle="modal" data-target="#shiningForceModal">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="See background info"
                >
                  Shining Force
                </a>
              </span>
              .
            </CardText>
            <hr />
            <p
              data-toggle="tooltip"
              data-placement="top"
              title="More Info Coming Soon"
            >
              Coming March 1, 2021
            </p>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Shining Force</ModalHeader>
          <ModalBody>
            Shining Force and its sequels are series of fantasy turn-based
            tactics role-playing video game. While beginning on Sega-based
            consoles, later releases and remakes were made by other companies.
          </ModalBody>
        </Modal>
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
        <HeaderSection />
        <GamesSection />
      </div>
    );
  }
}

export default Home;
