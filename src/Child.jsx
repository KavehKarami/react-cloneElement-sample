import React from "react";

const Child = (props) => {
  console.log('Children Props(recived from Parent Props): ', props)
  
  return(
    <div>{props.name}</div>
  )
}

export default Child
