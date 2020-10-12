import React from "react";

const Parent = (props) => {
  console.log('React Children: ',React.Children);
  
  return(
    <div>
      {React.Children.map(props.children, (child) => {
          return React.cloneElement(child,{name: props.name})
      })}
    </div>
  )
}

export default Parent
