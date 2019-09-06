import React from 'react';
import AboutUs from './AboutUs';
import Product from './Product';
import Home from './home';
import {BrowserRouter, Link, Route,Switch} from "react-router-dom";
import NavbarPage from './navbarpage';



 




export default class App extends React.Component{
    render(){ 
           return(
    <BrowserRouter>
    
    <NavbarPage/>
    
    <Route path="/" exact component={Home}/>
    <Route path="/product" component={Product}/>
    <Route path="/aboutus" component={AboutUs}/>
            
     


    </BrowserRouter>
    );
           }
        }
