import "./App.css";
import Card from "./components/Card";


function App() {
  // let myObj = {
  //   username: "hitesh",
  //   agw: 21
  // }
  
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card  username="chaiAurCode" />
      <Card  username="Noor" btnText="Visit Me"/>
      
    </>
  );
}

export default App;
