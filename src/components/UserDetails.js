import React, { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';


class UserDetails extends Component{
    constructor(props) {
        console.log("Constructor is called before anything else");
        super(props);
        this.state = {
            university: this.props.university,
            firstName: '',
            lastName: '',
            email: '',
            validated: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
        console.log(this.state.firstName);
    }

    validate(event) {
        this.setState({
            validated: true
        });
        alert(this.state.firstName + " : " + this.state.lastName);
        alert(this.props.data + 
            this.props.id);
    }


    render() {
        return( <Container>
                    <Form noValidate validated={this.state.validated} >
                        <Form.Group as={Col} controlId="formFirstName">
                            <Form.Label className="label">First Name</Form.Label>
                            <Form.Control
                            type="text"
                            defaultValue={this.state.firstName}
                            name="firstName"
                            required
                            onChange={this.handleChange}
                            />
                        
                            <Form.Label className="label">Last Name</Form.Label>
                            <Form.Control
                            type="text"
                            defaultValue={this.state.lastName}
                            name="lastName"
                            required
                            onChange={this.handleChange}
                            />
                        
                            <Form.Label className="label">Email Address</Form.Label>
                            <Form.Control
                            type="email"
                            defaultValue={this.state.email}
                            name="email"
                            required
                            onChange={this.handleChange}
                            />
                            
                        </Form.Group>

                        <Button variant="secondary" onClick={this.validate}>Validate</Button>
                    </Form>
                </Container>
        );
    }
}

export default UserDetails;