import React, {useState, useEffect} from "react";
import Footer from "../footer/footer";
import NavBar from "../nav/Nav";
import EmployeeTable from "../users/main";
import API from "../../Utils/API";
import SearchItem from "../Search/searchItem";

function Users() {
  const [employ, setEmploy] = useState([]);
  const [filteredEmp, setFilteredEmp] = useState([]);
  const [setSortEmployee] = useState("asc");
  const [userText, setUserText] = useState("");

  function handleText(e){
    let text = e.target.value.toLowerCase();
    setUserText(text);

  }
  function filter() {

    const result = employ.filter(person => person.name.first.toLowerCase() == userText);
    setEmploy(result);


  }

  function sortEmp() {
    filteredEmp.sort((a, b) => {
      return(a - b);
    })
    setSortEmployee(filteredEmp);
  }

  useEffect((emp) => {
    API.results(emp)
    .then((res) => {
      return res.data;
    })
    .then((data) => {
        console.log(data.results)

     
     setEmploy(data.results);
      
     // setFilteredEmp(employees);
    })

  }, [])




  console.log(employ)
  return (
    <div className="users">
      <div className="container">
        <NavBar/>
          <SearchItem filter={handleText} search={filter}>
            {/* <button onClick={props.sort}>Search</button> */}
          </SearchItem>
          <EmployeeTable sort = {filter} title="Employee List" data= {employ}/>
        <Footer/>
      </div>
    </div>
  );
}

export default Users;