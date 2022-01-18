import React from 'react';
import propTypes from 'prop-types';
  
const User =(props) => {
  
    return (
    <div>
  <div className="card-body">
    <h2 className="card-title">FullName:{props.fullName}</h2>
    <span className="card-author subtle">bio:{props.bio}</span>
    <span className="card-description subtle">Profession:{props.profession}</span>
    <button className='but' onClick={()=>props.data(props.fullName)}> Click Me</button>
  </div>
  {props.children}
</div>
    )
}
User.defaultProps = {
bio :"defaultBio"

}
User.propTypes = {
    fullName:propTypes.string,
    bio:propTypes.string,
    profession:propTypes.string,
    handleName:propTypes.func,
}


export default User;


