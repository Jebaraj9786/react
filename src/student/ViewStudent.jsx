import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row ,Table } from 'reactstrap';
class ViewStudent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            student:[{
                firstName:"",
                lastName:"",
                fatherName:"",
                motherName:"",
                guardianName:"",
                address1:"",
                address2:"",
                address3:"",
                pincode:"",
                mobileNum:"",
                altMobileNum:"",
                emailId:"",
                admissionNum:"",
                profilePicPath:""
            }]
        }
    }
    componentWillMount(){
        let routeState
        if(this.props.history.location.state){
            localStorage.setItem('routeState', JSON.stringify(this.props.history.location.state.student))
            this.setState( this.props.history.location.state.student)
            console.log("routeState"+this.state)
        } 
        else {
            routeState = localStorage.getItem('routeState')
           this.setState(JSON.parse(routeState))
            }
      }
    render(){
        return(
            <div className="animated fadeIn">
                <Row>
                    <Col  lg={6}>
                    <Card>
                    <CardHeader>
                     < i className="fa fa-align-justify"></i> Student Profile
                     <strong><i className="icon-info pr-1"></i>Admission Number: {this.state.admissionNum}</strong>
                    </CardHeader>
                    <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>{this.state.firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name</td>
                            <td>{this.state.last}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{this.state.address1}</td>
                        </tr>
                    </tbody>
                    <div>
                    <img style={{width: 307, height: 290}} className='tc br3' alt='none' src={this.state.profilePicPath} />
                    </div>
                  </Table>
                  </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>)
        
    }
}
export default ViewStudent;