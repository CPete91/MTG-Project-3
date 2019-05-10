import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="nav-bar" dark expand="md">
                    <NavbarBrand href="/">
                        <img
                            className="nav-brand"
                            src={require("../../assets/img/mgt-logo.png")}
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto nav-links-style" navbar>
                            <NavItem>
                                <NavLink className="nav-links-style" href="/deckdisplay" target="_parent">
                                    Your Decks
                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-links-style" href="/cardselector" target="_parent">
                                    New Deck
                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-links-style" href="/">
                                    Logout
                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
