import { useState } from "react";

const Char = () => {
  const [char, setChar] = useState("");
  const [codePoint, setCodePoint] = useState(null);
  const [submitted, setSubmitted] = useState(false);


  const handleCharChange = (event) => {
    setChar(event.target.value);
    setSubmitted(false);
  };
    // setChar(inputChar);

    const handleSubmit = (event)=>{
      event.preventDefault()

      if (char) {
        const charCode = char.charCodeAt(0);
        setCodePoint(charCode);
        setSubmitted(true);
      } else {
        setCodePoint(null);
        setSubmitted(false);
      }
    
  };

  const isEven = (number) => number % 2 === 0;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={char}
          onChange={handleCharChange}
          placeholder="Enter a Character"
        />
        <button type="submit">Submit</button>
      </form>

      { submitted && char && codePoint && (
        <div>
          <p>character: {char}</p>
          {/* <p>Unicode Code Point: {codePoint}</p> */}
          <p> Character is {isEven(codePoint) ? "even" : "odd"}</p>
        </div>
      )}
    </div>
  );
};

export default Char;
