
import './Home.css';
import {Link } from "react-router-dom";


function Submit() {
  return (
    <>
    <div className="Club">
          <div className="text">
          <br></br>
          <br></br>
          <div classname="F">
    <h1 >Thank You!</h1>
    <p>You will get your confirmation in your email</p>
    <div className="hButton">
                      <Link to="/"><button className="buttons">
                          Home
                      </button>
                      </Link>
    </div>
              </div>
          </div>
      </div>
      
    
          </>


  );
}

export default Submit;
