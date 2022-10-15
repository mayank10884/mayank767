import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends Component {
    constructor(props) {
        console.log("Constructor is called before anything else");
        super(props);
      }
    
      componentDidMount() {
        console.log("Component mounting");
      }
    
      componentDidUpdate() {
        console.log("Component is updated");
      }
    
      componentWillUnmount() {
        console.log("Component is being unmounted");
      }
    
      render() {
      return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/home">Book Management</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <Nav.Link href="/aboutus">Aboutus</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
            
      );
    }
}
export default Navigation;
