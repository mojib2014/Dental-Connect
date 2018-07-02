import React from "react";
import "./dentist.css"
import FindInfo from "../../components/FindInfo";
import Photo from "../../components/Photo";
// import Footer from "../../components/Footer";
import { Col, Row, Table, Button, Form, Label, Input} from "reactstrap";

class Dentist extends React.Component{

    constructor(props) {
        super(props),
            this.state = {
                phoneNumber: "",
            }
    }

    handlePhoneInput = (event) => {
        const {name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
            <div className="dentistInfo container">
                <Row className = "dentistR1">
                    <Col md="4" xs="4">
                    <Photo />
                        {/* <img className="docPic" src="http://imgx.xiawu.com/xzimg/i4/i3/14932021301911074/T12qp5XyJcXXXXXXXX_!!0-item_pic.jpg" alt="William"/> */}
                    </Col>
                    <Col md="8" xs="8">
                        <div>Great Dr.William is me! Wa hahahahahahahah!!!</div>
                    </Col>
                </Row>
                <Row className="dentistR2">
                    <Col md="7" xs="7">
                        <Table>
                        
                            <thead>
                            <tr>
                                <th>date</th>
                                <th>date</th>
                                <th>date</th>
                                <th>date</th>
                                <th>date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>date</td>
                                <td>date</td>   
                                <td>date</td>
                                <td>date</td>
                            </tr>
                            <tr>
                                <td>date</td>
                                <td>date</td>   
                                <td>date</td>
                                <td>date</td>
                            </tr>
                            <tr>
                                <td>date</td>
                                <td>date</td>   
                                <td>date</td>
                                <td>date</td>
                            </tr>
                            <tr>
                                <td>date</td>
                                <td>date</td>   
                                <td>date</td>
                                <td>date</td>
                            </tr>
                            <tr>
                                <td>date</td>
                                <td>date</td>   
                                <td>date</td>
                                <td>date</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col className="patientCard" md="5" xs="5">
                        <Form inline>
                            <Label for="searchPatients">Patient's Phone:</Label>
                     
                            <Input 
                                value= {this.state.phoneNumber}
                                onChange={this.handlePhoneInput}
                                name="phoneNumber" 
                                placeholder="Phone Number" 
                            />
                            <Button onClick={this.handlePhoneSearch} color="primary" size="sm">Search</Button>
                           
                        </Form>
                        <div>
                            <FindInfo />
                        </div>
                    </Col>
                </Row>
            </div>
                
            </div>
        )
    }
}

export default Dentist;