import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([
    { id: 101, name: "David", salary: 200000 },
    { id: 102, name: "Anna", salary: 300000 },
    { id: 103, name: "Ashot", salary: 450000 },
    { id: 104, name: "Karen", salary: 350000 }
  ]);

  const salaryUp = (id) => {
    let temp = [...users]
    let found = temp.find(x => x.id == id)
    
    setUsers(temp.map(elm => 
      elm.id==id ?{...elm,salary:elm.salary +50000} : elm
    ))
  }

  const salaryDown = (id) => {
    let temp = [...users]
    let found = temp.find(x => x.id == id)
    setUsers(temp.map(elm => 
      elm.id==id?{...elm,salary:elm.salary -50000}: elm
    ))
  }

  const remove = (id) =>{
    let temp = [...users]
    let found = temp.find(x => x.id == id)
    setUsers(temp.map(elm => 
      elm.id==id?{...elm,id:elm = null}: elm
    ))
  }


  return (
    <>
      <h1>Barev {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>UP</button>
      <table>
        <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
              users.map(elm => <tr key={elm.id}>
                <td>{elm.id}</td>
                <td>{elm.name}</td>
                <td>{elm.salary}</td>
                <td>
                  <button onClick = {() => salaryUp(elm.id)}> Up Salary</button>
                  <button onClick = {() => elm.salary > 50000?salaryDown(elm.id):elm}>Down Salary</button>
                  <button onClick = {() => remove(elm.id)}>Remove</button> 
                </td>
              </tr>)
            }
        </tbody>

      </table>
      <h1>Hajox</h1>
    </>
  );
}

export default App;
