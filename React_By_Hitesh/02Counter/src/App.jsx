import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("clicked", counter);
    // counter = counter + 1;
    // setCounter(counter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    // setCounter(counter + 1);
  };

  const [utm, setUtm] = useState({
    utmCampaign: '',
    utmContent: '',
    utmMedium: 'reschedule',
    utmSource: 'Facebook',
    utmTerm: 'Spring'
  });

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  const set1 = [{
    name: "One",
    _id: "Booking : 10001",
    session_id: "Session : 10001"
  },
  {
    name: "Two",
    _id: "Booking : 10002",
    session_id: "Session : 10002"
  }
  ]

  const addValue2 = (item) => {
    console.log(item)
    setUtm((rep) => ({
      ...rep,
      // console.log("rep", ...rep)
      utmCampaign: item._id,
      utmContent: item.session_id,
    }))
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
      <hr />
      <br />

      <h2>utmCampaign : {utm?.utmCampaign}</h2>
      <h2>utmContent :{utm?.utmContent}</h2>
      <h2>utmMedium : {utm?.utmMedium}</h2>
      <h2>utmSource : {utm?.utmSource}</h2>
      <h2>utmTerm : {utm?.utmTerm}</h2>
      <br />
      <hr />

      <br />
      <br /><br />
      {set1 && set1.map((item, index) => (
        <>
          <button key={index} onClick={() => addValue2(item)}>{item?.name}</button>
        </>
      ))}


    </>
  );
}

export default App;
