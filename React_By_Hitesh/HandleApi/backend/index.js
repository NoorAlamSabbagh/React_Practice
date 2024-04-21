import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/18078709/pexels-photo-18078709/free-photo-of-man-sitting-with-vintage-telephone-and-near-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "table glass",
      price: 250,
      image:
        "https://images.pexels.com/photos/14701288/pexels-photo-14701288.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id: 3,
      name: "table wooden",
      price: 200,
      image:
        "https://images.pexels.com/photos/18078709/pexels-photo-18078709/free-photo-of-man-sitting-with-vintage-telephone-and-near-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "table polyster",
      price: 150,
      image:
        "https://images.pexels.com/photos/18666051/pexels-photo-18666051/free-photo-of-brunette-wearing-leather-jacket-and-sunglasses-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  //http://localhost:3000/api/products?search=metal
  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
