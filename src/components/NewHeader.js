import * as React from "react";
import {MenuItem, Navbar, NavDropdown, NavItem} from "react-bootstrap";
const appName = 'Athletic Pal';

const Nav = (props) => {
    const opacity = (props.opacity) ? Math.max(props.opacity, 0.2) : 0;
    const borderBottomWidth = (props.opacity === 1) ? props.borderBottomWidth : 0;

    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#brand">React-Bootstrap</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link Right
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const Header = (props) => (
    <div className="header" style={{ height: props.height, borderBottomWidth: props.borderBottomWidth }}>
        <div className="name">{appName}</div>
        <div className="links">
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
        </div>
    </div>
);

export default class NewHeader extends React.Component {
    static defaultProps = {
        bottomBorderWidth: 2,
        headerHeight: 150,
        fadeInDistance: 40
    };

    constructor(props) {
        super(props);
        this.state = { navOpacity: 0 };
        this.updateNavOpacity = this.updateNavOpacity.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.updateNavOpacity);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.updateNavOpacity);
    }

    updateNavOpacity() {
        const navbarHeight = 40; // Bootstrap default
        const { bottomBorderWidth, headerHeight, fadeInDistance } = this.props;
        const endFade = headerHeight - navbarHeight - bottomBorderWidth;
        const startFade = endFade - fadeInDistance;
        const scrolly = window.scrollY;

        if (scrolly < startFade) {
            if (this.state.opacity === 0) return;
            this.setState({ navOpacity: 0 });
            return;
        }

        if (scrolly > endFade) {
            if (this.state.opacity === 1) return;
            this.setState({ navOpacity: 1 });
            return;
        }

        const pxPastStartFade = scrolly - startFade;
        const navOpacity = pxPastStartFade / (endFade - startFade);
        this.setState({ navOpacity });
    }

    render() {
        return (
            <div>
                <Nav opacity={ this.state.navOpacity } borderBottomWidth={ this.props.bottomBorderWidth } />
                <Header height={ this.props.headerHeight } borderBottomWidth={ this.props.bottomBorderWidth } />
            </div>
        );
    }
}