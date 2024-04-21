import { useState } from 'react';

function IntegrateAPI() {
    const [FormData, setFormData] = useState({ email: "", password: "" });
    // const navigate = useNavigate("")
    const handleChange = (e) => {
      setFormData({ ...FormData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(FormData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.hasOwnProperty("error"))
            alert("Enter wrong email, id or password");
          else {
            alert("you are successfully logged in");
            localStorage.setItem("token", data.token);
            localStorage.setItem("is_login", true);
            // navigate("./")
          }
        })
        .catch((error) => {
          console.error("Error Logged in:", error);
        });
    };
  return (
    <div>
    <h1>LOGIN FORM</h1>
         <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={FormData.email}
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={FormData.password}
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <button> Submit</button>
      </form>
    </div>
  )
}

export default IntegrateAPI






// find the Api attachment billow for integration

// login Api
// https://reqres.in/api/login
// Request
// {
// "email": "eve.holt@reqres.in",
// "password": "cityslicka"
// }
// Response
// 200

// {
// "token": "QpwL5tke4Pnpja7X4"
// }

// User list Api
// https://reqres.in/api/users?page=2
