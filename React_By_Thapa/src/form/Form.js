import React,{useState} from 'react';
import './Form.css';


const Form = () => {
  const [fullName, setFullName] = useState({
    fname:"",
    lname:"",
    email:"",
    phone:"",
  });
  
  const InputEvent =(event)=>{
      console.log(event.target.value);
      console.log(event.target.name);

      const {value, name} = event.target;
      

      setFullName((preValue)=>{
        // console.log(preValue)
        if(name === "fname"){
          return{
            fname:value,
            lname:preValue.lname,
            email:preValue.email,
            phone:preValue.phone,
        }
        }else if(name === "lname"){
          return{
            fname:preValue.fname,
            lname:value,
            email:preValue.email,
            phone:preValue.phone,
        }
        }else if(name === "email"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:value,
            phone:preValue.phone,
        }
        }else if(name === "phone"){
          return{
            fname:preValue.fname,
            lname:preValue.lname,
            email:preValue.email,
            phone:value,
        }
      }
            })
  }

  const onSubmit=(event)=>{
    event.preventDefault();
   alert("Form Submitted")
  }

    
    
  return (
    <div className='main-div'>
    <form onSubmit={onSubmit}>
    <div>
      <h1>Hello {fullName.fname} {fullName.lname}</h1>
      <p>{fullName.email}</p>
      <p>{fullName.phone}</p>
      <input type="text" placeholder='Enter Your Name' name ='fname' onChange={InputEvent} value={fullName.fname}/>
      <br/>
      <input type="text" placeholder='Enter Your Name' name='lname' onChange={InputEvent} value={fullName.lname}/>
      <br />
      <input type="email" placeholder='Enter Your email' name='email' onChange={InputEvent} value={fullName.email} autoComplete = "off"/>
      <br />
      <input type="number" placeholder='Enter Your mobile number' name='phone' onChange={InputEvent} value={fullName.phone}/>
      <button type='submit'>Submit Me </button>
      </div>
      </form>
    </div>
  )
}

export default Form









/*
const Form = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [lastName, setLastName] = useState();
  const [lastNamenew, setLastNameNew] = useState();

    const InputEvent =(event)=>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const InputEventTwo =(event)=>{
    setLastName(event.target.value)
    }

    const onSubmit=(event)=>{
      event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName)
    }
    
  return (
    <div className='main-div'>
    <form onSubmit={onSubmit}>
    <div>
      <h1>Hello{fullName} {lastName}</h1>
      <input type="text" placeholder='Enter Your Name' onChange={InputEvent} value={name}/>
      <br/>
      <input type="text" placeholder='Enter Your Name' onChange={InputEventTwo} value={lastNamenew}/>
      <button type='submit'>Submit Me </button>
      </div>
      </form>
    </div>
  )
}

export default Form
*/
