import React from "react";

const Child2 = (props) => {
  console.log('Children Props(recived from Parent Props): ', props)
  
  return(
    <div>Hello {props.name}</div>
  )
}

export default Child2
