import React from 'react';
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <>
<h1>This is the home page </h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/6CCioTr6o3E" frameborder="0" allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<Link to="/product">Go to product</Link>
<Link to="/aboutus">Go to About us</Link>

        </>
    )
}