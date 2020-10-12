import React from "react";

const Child = (props) => {
  console.log('Children Props(recived from Parent Props): ', props)
  
  return(
    <React.Fragment>
      <div>my name is {props.name}</div>
      {/* NOTE i havn't use React.Children because i have only one nested Child (props.children element)  */}
      {React.cloneElement(props.children, {name: props.name , family: props.family})}
    </React.Fragment>
  )
}

export default Child
