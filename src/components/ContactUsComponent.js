import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from "reactstrap";
import {
  CONTACT_FORM_TEXT,
  NAME_FORM_ELEMENT,
  EMAIL_FORM_ELEMENT,
  COMMENTS_FORM_ELEMENT,
  FEEDBACK_FORM_ELEMENT,
  SUBSCRIBE_FORM_ELEMENT,
} from "../shared/contactFormElements";

// ContactDescription Component
const ContactDescription = (props) => {
  return <p className="py-2">{props.description}</p>;
};

// Form Element Component
const FormElement = (props) => {
  if (props.formElement === SUBSCRIBE_FORM_ELEMENT) {
    return (
      <FormGroup>
        <span className="px-1">
          <Input type={props.formElement.type} name={props.formElement.name} />
          Yes
        </span>
        <span className="px-1">
          <Input type={props.formElement.type} name={props.formElement.name} />{" "}
          No
        </span>
        <p>
          (You will receive news and updates on the latest games, including
          patches and bug fixes for known issues.)
        </p>
      </FormGroup>
    );
  } else {
    return (
      <Input
        type={props.formElement.type}
        name={props.formElement.name}
        id={props.formElement.id}
      />
    );
  }
};

// Form Component
const FormComponent = (props) => {
  return (
    <FormGroup className="row">
      <Label
        for={`#${props.formElement.id}`}
        className="col-sm-3 col-form-label"
      >
        {props.formElement.name}
      </Label>
      <Col sm="9">
        <FormElement formElement={props.formElement} />
      </Col>
    </FormGroup>
  );
};

// Submit Button Component
const SubmitComponent = () => {
  return (
    <FormGroup className="row justify-content-end">
      <Button type="submit" className="btn-warning text-success">
        Submit
      </Button>
    </FormGroup>
  );
};

// CONTACTUS - MAIN COMPONENT
class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: CONTACT_FORM_TEXT,
      nameFormElement: NAME_FORM_ELEMENT,
      emailFormElement: EMAIL_FORM_ELEMENT,
      commentsFormElement: COMMENTS_FORM_ELEMENT,
      feedbackFormElement: FEEDBACK_FORM_ELEMENT,
      subscribeFormElement: SUBSCRIBE_FORM_ELEMENT,
    };
  }
  render() {
    return (
      <Container fluid className="bg-light">
        <div className="mx-auto w-75">
          <h2 className="text-center py-2">CONTACT FORM</h2>
          <ContactDescription description={this.state.text} />
        </div>
        <Form className="mx-auto py-4 w-75">
          <FormComponent formElement={this.state.nameFormElement} />
          <FormComponent formElement={this.state.emailFormElement} />
          <FormComponent formElement={this.state.commentsFormElement} />
          <FormComponent formElement={this.state.feedbackFormElement} />
          <FormComponent formElement={this.state.subscribeFormElement} />
          <SubmitComponent />
        </Form>
      </Container>
    );
  }
}

export default ContactUs;
