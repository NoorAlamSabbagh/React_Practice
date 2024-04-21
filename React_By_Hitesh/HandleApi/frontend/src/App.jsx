import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState();

  useEffect(() => {
    const controller = new AbortController()//1
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        // const response = await axios.get("/api/products");
        // const response = await axios.get("/api/products?search=" + search);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal//2
        })
        // console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){//3
          console.log('Request Cancelled', error.message)
          return
        }
        setError(true);
        setLoading(false);
      }
    })()

    //cleanup //4
    return () => {
     controller.abort()
    }
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }
  // if (loading) {
  //   return <h1>Loading...... </h1>;
  // }

  return (
    <>
      <h1>Chai aur Api in react</h1>
      <input type="text" placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong....</h1>}
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;

//
/*
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, error, loading] = customReactQuery("/api/products");

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (loading) {
    return <h1>Loading...... </h1>;
  }

  return (
    <>
      <h1>Chai aur Api in react</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return [products, error, loading];
};
*/
