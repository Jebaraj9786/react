import React from 'react';
import './Home.css';
import { Button } from 'reactstrap';
import { MDBDataTable } from 'mdbreact';
import AuthService from '../service/AuthService';
import DataTable from 'react-data-table-component';
import styled from 'styled-components';


 class Home extends React.Component{
    constructor(props){
       
        super(props)
        this.auth = new AuthService();
        this.state ={
         user:[]
     };

       
    }
     routeChange=()=>{
        this.props.history.push('/createUser')
     }
     
   async componentWillMount(){
      
       await this.auth.getAllStudents().then(res=>{
         
         this.setState({user:res.data})
 
       })
    }
    handleClick(event) {
      this.props.history.push({pathname:'/viewStudent/',state:{student:event}})
    }
    
     render() {
      const {user} = this.state;    
       
      const columns = [
           {
             name: 'admissionNum',
             selector: 'admissionNum',
             sortable: true,
             grow: 2
           },
           {
             name: 'firstName',
             selector: 'firstName',
             sortable: true,
             
           },
           
           {
             name: 'lastName',
             selector: 'lastName',
             sort: true,
             
           }
         ];
       
        return (
           <div>
           <div>{user.length?(
           <div>
              {/* <table id='students'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table> */}
              {/* <MDBDataTable 
               striped
               bordered
               small
               order={['firstName', 'asc' ]}
               data={data}
              /> */}
              <DataTable highlightOnHover
              title={<h1>Student Details</h1>}
              columns={columns}
              data={user}
              onRowClicked = {this.handleClick.bind(this)}
              
              //selectableRows
              actions ={<Button color="primary" className="px-4"
              onClick={this.routeChange} 
                >
                jeba+
              </Button>}

            
              
              fixedHeader
              fixedHeaderScrollHeight="300px"
              pagination
              />
              <button color="primary" className="px-4">jeba</button>
           </div>):(<div>loading..</div>)}</div>
           </div>
        )
     }
}
export default Home;