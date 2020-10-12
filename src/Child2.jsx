import React from "react";

const Child2 = (props) => {
  console.log('Children Props(recived from Parent Props): ', props)
  
  return(
    <div>Hello <span>{props.name}</span></div>
  )
}

export default Child2
