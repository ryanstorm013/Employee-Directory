import React from 'react';

function EmployeeTable(props) {
    return (
        <table className="emp-table">
            <thead>
                <button onClick={props.sort}>Search</button>
                <tr>
                    <th scope="col">Photo </th>

                    <th scope="col">Name </th>
                    
                    <th scope="col">Email </th>
                    <th scope="col">Phone </th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody className="emp-view">

            {props.data.map((user, index) => (
          <tr key={index}>
               <td>
               <img src={user.picture.thumbnail} alt="employee"/>
               </td>
            <td>{user.name.first} </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
           
          </tr>
        ))}
                
            </tbody>
        </table>
    );
    
    
}

export default EmployeeTable;