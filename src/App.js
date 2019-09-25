import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from "react-table";
import 'react-table/react-table.css'

const columns = [{
  Header: 'Name',
  accessor: 'name' // String-based value accessors!
}, {
  Header: 'Age',
  accessor: 'age',
  Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
}, {
  id: 'friendName', // Required because our accessor is not a string
  Header: 'Friend Name',
  accessor: d => d.friend.name // Custom value accessors!
}, {
  Header: props => <span>Friend Age</span>, // Custom header components!
  accessor: 'friend.age'
}]
class App extends React.Component {
    constructor(props){
    super(props)

  }

  fetchingData(){
      console.log('Firing fetch data')
  }

  render() {
    return (
        <div className="App">
          <button onClick={() => {
            this.refReactTable.fireFetchData()
          }}>Refresh
          </button>
          <ReactTable
              columns={columns}
              manual
              ref={(refReactTable) => {
                this.refReactTable = refReactTable;
              }}
              onFetchData={this.fetchingData}
          />
        </div>
    );
  }
}




export default App;
