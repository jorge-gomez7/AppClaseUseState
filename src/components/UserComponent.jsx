import axios from "axios";
import { useState, useEffect } from "react";

export const UserComponent = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers();
  },[]);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(respuesta => {
        console.log(respuesta.data.data);
        setUsers(respuesta.data.data);
      });
  }



  return (
    <div>
      <h1 className="text-center">Lista de Usuarios</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((el) => {
              return (              
                  <tr key={el.id}>
                    <td >{el.id}</td>
                    <td >{el.first_name}</td>
                    <td >{el.email}</td>
                  </tr>             
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
