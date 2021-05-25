import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import employees from "../employees.json";

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      columnDefs: [
        { headerName: 'Name', field: 'name', sortable: true, filter: true },
        { headerName: 'Phone', field: 'phone', sortable: true, filter: true },
        { headerName: 'Email', field: 'email', sortable: true, filter: true },
        { headerName: 'DOB', field: 'dob', sortable: true, filter: true }
      ],
      employees,
      filteredEmployees: employees,
      searchbox: "",

    };
  }  
   handleChange =  (event) => {
    const value = event.target.value;
    this.setState({...this.state,searchbox: value });
    const filteredResults = this.state.employees.filter(employee =>{
        console.log(employee.name, this.state.searchbox ) 
      return employee.name.toLowerCase().includes(value.toLowerCase())
      
   })
      console.log(filteredResults);
      this.setState({...this.state,filteredEmployees:filteredResults})
  } 
  render() {
    const {employees, searchbox, filteredEmployees} = this.state
    // const filteredResults = employees.filter(employee =>(
    //   employee.toLowerCase().includes(searchbox.toLowerCase())
    // ))
    return (
      <div className="ag-theme-balham container"
        style={{
          width: 800,
          height: 342,
        }}
      >
         <input 
        // value={this.state.searchbox}
        onChange={this.handleChange}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search employees"
        />
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.filteredEmployees}
        />

      </div>
    )
  }
}


export default Table;
