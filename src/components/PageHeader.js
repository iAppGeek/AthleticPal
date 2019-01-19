import * as React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import * as NavItem from "react-bootstrap/lib/NavItem";

const PageHeader = (props) => {

    return (
        <Navbar fixedTop inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Athletic Pal</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="/food">
                        Food Track
                    </NavItem>
                    <NavItem eventKey={2} href="/training">
                        Training Details
                    </NavItem>
                    {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
                        {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
                        {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
                        {/*<MenuItem divider/>*/}
                        {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
                    {/*</NavDropdown>*/}
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="/contact">
                        Contact Trainers
                    </NavItem>
                    <NavItem eventKey={2} href="/about">
                        About
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PageHeader;