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
                </NavbarContainer>
            </Nav>
        </Fragment>
    )
}

export default Navbar