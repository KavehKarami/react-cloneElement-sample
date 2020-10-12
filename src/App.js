import React from "react";
import Parent from "./Parent";
import Child from "./Child";
import "./style.css";

export default function App() {
  return (
    <div>
      <Parent name="kaveh" >
        <Child />
      </Parent>
    </div>
  );
}
