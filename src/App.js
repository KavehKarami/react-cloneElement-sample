import React from "react";
import "./style.css";
import Parent from "./Parent";
import Child from "./Child";
import Child2 from "./Child2";
import NestedChild1 from "./NestedChild1";

export default function App() {
  return (
    <div>
      <Parent name="kaveh" family="karami" >

        <Child>
            <NestedChild1 />
        </Child>

        <Child2 />

      </Parent>
    </div>
  );
}
