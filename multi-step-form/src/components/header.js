import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

const Header = ({name}) => {
  return (
    <Navbar color='info' light>
          <NavbarToggler className="mr-2" />
          <NavbarBrand className="m-auto text-white">{name}</NavbarBrand>
        </Navbar>
  )
}

export default Header;