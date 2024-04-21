import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);
  const [nums, setNums] = useState(0);

  useEffect(() => {
    alert("I am Clicked");
    console.log("I am clicked again")
  }, [num]);

  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        click Me {num}
      </button>
      <br />
      <button
        onClick={() => {
          setNums(nums + 1);
        }}
      >
        click Me {nums}
      </button>
    </>
  );
};

export default UseEffect;
