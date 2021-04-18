import React, { Fragment } from 'react';
import {Nav, NavbarContainer, NavLogo} from './NavbarElements';

const Navbar = () => {
    return (
        <Fragment>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        guap
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"/>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar