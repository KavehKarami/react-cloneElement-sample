import React from "react";

const Child = (props) => {
  console.log('Children Props(recived from Parent Props): ', props)
  
  return(
    <div>my name is {props.name}</div>
  )
}

export default Child
