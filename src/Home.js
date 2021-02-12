import React , { Component } from "react";
import MyInput from './Components/Input/InputComponents';
import MyNavbar from './Components/Navbar/NavbarComponents';

class Home extends Component{
render()
{
    return(
        <div className="App">
            <MyNavbar/>
            <MyInput/>
        </div>
    )
}
}
export default Home;