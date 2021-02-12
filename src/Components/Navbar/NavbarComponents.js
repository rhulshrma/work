import React,{ Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button'
import "../Navbar/Navbar.styles.css";
import fire from "../../config/fire";


class MyNavbar extends Component{
  constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
  render(){
    return(
      <>
      <Navbar id="bar"  expand="lg">
        <Navbar.Brand id="Brand1" href="#home">Save Data</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
            <Button className="formBtn" onClick={this.logout}>Logout</Button>
        
        </Navbar.Collapse>
      </Navbar>
    </>

    );
  }
}

export default MyNavbar;
