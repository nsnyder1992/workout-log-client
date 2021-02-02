import React, { useState } from "react";
import { Nav, Navbar, NavbarBrand } from "reactstrap";

const Sitebar = (props) => {
  return (
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">Workout Log</NavbarBrand>
    </Navbar>
  );
};

export default Sitebar;
