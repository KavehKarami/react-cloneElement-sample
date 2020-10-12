import React from "react";
import Parent from "./Parent";
import Child from "./Child";
import Child2 from "./Child2";
import "./style.css";

export default function App() {
  return (
    <div>
      <Parent name="kaveh" >
        <Child />
        <Child2 />
      </Parent>
    </div>
  );
}
