
import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import {When} from 'react-if'
function Header() {

  const logging = useContext(AuthContext);

  return (
    <Navbar id='nav'>
      <Navbar.Group id='navBar'>
        <Navbar.Heading>To-Do List</Navbar.Heading>
        <Navbar.Divider />
        <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
        <When condition={logging.loggedIn}>
        <Button className="bp3-minimal" onClick={(e)=>{logging.logout()
        }}  intent='warning' text="logout" />
        </When>
      </Navbar.Group>
    </Navbar>

  )
}

export default Header