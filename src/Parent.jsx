import React from "react";

const Parent = (props) => {
  console.log('React Children: ',React.Children);
  
  return(
    <div>
      {/* NOTE this React.Children only for sibling Element; if u have one child in the component as a children u no longer need to use React.Children ... ; u can only use React.cloneElement but instead child write props.children */}
      {React.Children.map(props.children, (child) => {
          return React.cloneElement(child,{name: props.name , family: props.family})
      })}
    </div>
  )
}

export default Parent
