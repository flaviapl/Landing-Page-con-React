import React from "react";
const Card = () => {
    return (<div className="card cards col-xl-3 col-xs-12 ps-0 pe-4" >
    <img src="https://www.precisemedical.co.uk/wp-content/uploads/2017/05/grey-square.png" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis</p>
      <div className="botón">
        <a href="#" className="btn btn-primary text-center">Find out more!</a>
      </div>
    </div>
  </div>);
 
};
export default Card