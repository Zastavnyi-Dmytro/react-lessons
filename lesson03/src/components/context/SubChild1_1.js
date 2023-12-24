import React from "react";
import {AppContext} from '../../App'
import { useContext } from "react";

const SubChild1_1 = () => {
  const data = useContext(AppContext);
  return (
    <div>
      <h2>SubChild1_1</h2>
      <p>Message from SubChild2_2: {data}</p>
    </div>
  );
};

export default SubChild1_1;
