import React from 'react';
import {Link} from "react-router-dom";

function Product(){
    return(  
<>
  <h1>Those are our products </h1>
<Link to="/" >Home </Link>
<Link to="/aboutus" >About us  </Link>
<img src="/tent.png"></img>
<img src="/lampe.png"></img>
<img src="/Sac de couchage.png"></img>
</>
  )
}

export default Product;
