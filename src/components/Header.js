import React, { Component } from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

// Returning it immediately
// const Header = () => {
    
// };

class Header extends Component {

    constructor(props) {
        super(props);
    
        // setting initial state
        this.toggle = this.toggle.bind(this);

        // state used in copmonenet
        this.state = {
          isOpen: false
        };
    }

    // tagging current bollean value and flipping it
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">{this.props.appName}</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            1, 000 Traffic Incidents
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;