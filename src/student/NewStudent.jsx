import React from 'react';
import { Form,Button, Col } from 'react-bootstrap'
import AuthService from '../service/AuthService'
import ViewStudent from './ViewStudent'
class NewStudent extends React.Component{
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
                emailId:""

            }]
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this)
        this.auth = new AuthService();
        console.log("test pre"+JSON.stringify(this.props.history.location.state));
       
    }
    handleSubmit(e) {
      e.preventDefault();
        const studentData ={
          firstName : this.state.firstName,
          lastName:this.state.lastName,
          fatherName:this.state.fatherName,
          motherName:this.state.motherName,
          guardianName:this.state.guardianName,
          address1:this.state.address1,
          address2:this.state.address2,
          address3:this.state.address3,
          pincode:this.state.pincode,
          mobileNum:this.state.mobileNum,
          altMobileNum:this.state.altMobileNum,
          emailId:this.state.emailId,
          admissionNum:this.state.admissionNum
        }
        console.log(""+this.state.firstName,studentData);
          this.auth.addStudent(studentData).then((response) => {
            console.log(response);
          })
  
    }

    handleChange(event){
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    }

    uploadSingleFile(e) {
      this.setState({
          file: URL.createObjectURL(e.target.files[0])
      })
  }
  componentWillMount(){
    if(this.props.history.location.state != null){
      this.state = this.props.history.location.state.student;
    }
    console.log("fjsfdsflks"+JSON.stringify(this.state))
  }
    render(){
      let imgPreview;
      if (this.state.file) {
          imgPreview = <img src={this.state.file} alt='' />;
      }
      if(!this.state.admissionNum){
        
    
        return (
      //   <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <div>
      //       <h1 id='title'>New Student</h1>
      //       <label>
      //         First Name:
      //      </label>
      //       <input type="text" name='firstname' value={this.state.student.firstName} onChange={this.handleChange} />
      //     </div>
      //     <div>
      //       <label >
      //         Last Name:
      //     </label>
      //       <input type="text" name='lastname' value={this.state.student.lastname} onChange={this.handleChange} />
      //     </div>
      //     <div className="FormField">
      //       <button className="FormField__Button mr-20">submit</button> 
      //     </div>
      //   </form>
      // </div>
      <Form id="my-form" onSubmit={this.handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control name="firstName" required type="text" placeholder="First name" value={this.state.firstName} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridFathersName">
      <Form.Label>Father Name</Form.Label>
      <Form.Control  type="text" placeholder="Father name" name="fatherName" value={this.state.fatherName} onChange={this.handleChange}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMotherName">
      <Form.Label>Mother Name</Form.Label>
      <Form.Control type="text" placeholder="Mother Name" name="motherName" value={this.state.motherName} onChange={this.handleChange}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridGuardianName" >
      <Form.Label>Guardian Name</Form.Label>
      <Form.Control type="text" placeholder="Guardian Name" name="guardianName" value={this.state.guardianName} onChange={this.handleChange} />
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Address1" value={this.state.address1} onChange={this.handleChange} name="address1"/>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Address2" value={this.state.address2} onChange={this.handleChange} name="address2"/>
  </Form.Group>
  <Form.Group as={Col} controlId="formGridAddress3">
    <Form.Label>Address 3</Form.Label>
    <Form.Control placeholder="Address3" value={this.state.address3} onChange={this.handleChange} name="address3" />
  </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPinCode">
      <Form.Label>Pincode</Form.Label>
      <Form.Control value={this.state.pincode} onChange={this.handleChange} name="pincode"/>
    </Form.Group>
  </Form.Row>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridmbl">
      <Form.Label>Mobile Num</Form.Label>
      <Form.Control  value={this.state.mobileNum} onChange={this.handleChange} name="mobileNum"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridaltmbl">
      <Form.Label>Alternative Mobile Num</Form.Label>
      <Form.Control value={this.state.altMobileNum} onChange={this.handleChange} name="altMobileNum"/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridaltemail">
      <Form.Label>email</Form.Label>
      <Form.Control type="email" value={this.state.emailId} onChange={this.handleChange} name="emailId"/>
    </Form.Group>
  </Form.Row>
  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <div className="form-group preview">
                    {imgPreview}
                </div>
  <div className="form-group">
                    <input type="file" className="form-control" onChange={this.uploadSingleFile} />
                </div>
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        )
    }
    else{
      return(<div>load..</div>)
    }
  }
}export default NewStudent;