import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

//Form Implementation
function PersonForm(props){

  const [person, setPerson] = useState("");

  function HandleChange(e){
    setPerson(e.target.value);
  }

  function HandleSubmit(e){

    if(person !== ''){
    props.HandleSubmit(person);
    setPerson("");
    }

    e.preventDefault();
    
  }

  return(

    <div>
      <form onSubmit={HandleSubmit}>
      <input type="text" placeholder="Add a Person name here" value={person} onChange={HandleChange} required />
      <button type="submit"> ADD </button>
      </form>
    </div>
  );
}

//Person List Implementation
function PersonList(props){

  const arr = props.data;

  const listItem = arr.map((val, index)=> 
    <li key={index}> {val} </li>
  )

  return(
  <ul>{listItem}</ul>
  );

    
}


//Contact Manager
function ContactMng(props){

  const [contact, setContact] = useState(props.data);

  function AddPerson(name){

    setContact([...contact, name]);
  }

  return(
    <div>
    {/* Call the HandleSubmit function inside of the PersonForm function and pass the AddPerson function as a parameter  */}
    <PersonForm HandleSubmit={AddPerson} />

    <PersonList data={contact} />
  </div>
  )
}

const contact = ["Dilanka", "Steve", "Warner"];

const el = (
  <div>
    <ContactMng data={contact} />
  </div>
)


ReactDOM.render(

  el,
  document.getElementById("root")
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
