import React, {Component} from "react";
import Login from "../../components/Login";
import ContactForm from "../../components/ContactForm";
import { Col, Row, Container } from "reactstrap";


class Main extends Component {

    render() {
        return (
            <Container fluid> 
                    <Row>
                       <Col size="md-6">
                            <div className="intro">
                                <p>Great William is Watching You!</p>
                            </div>
                       </Col>
                       <Col size="md-6">
                            <div className="Login">
                                <Login />
                            </div>
                       </Col> 
                    </Row>
                    <ContactForm />
            </Container>
        );
    }
}

export default Main;