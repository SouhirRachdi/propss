import React from 'react';
import './App.css';
import User from './profile/Profile';
function App() {
  function handleName (x) {
    alert(x)
    };
  
  return (
    <div div className="App"  style={{ height:"100vh" ,background:"rgb(221, 144, 0)" , display: "flex", alignItems: "center" , justifyContent: "center", backgroundSize: "cover"}}>
   <div className='card'>
     <User  fullName="Souhir Rachdi"  bio ="Natural" profession="Devloper" data={handleName}> <img className='img' src="./photo.jpg" alt="" /></User>
 </div>
    </div>
  );
}

export default App;
