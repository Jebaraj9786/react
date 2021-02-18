import React, { Component }  from 'react'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import AuthService from '../service/AuthService'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';
import { FormControl } from 'react-bootstrap';
class AddStudent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            file:null,
            student:{
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
                dob:"",
                sex:"",
                
            }
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.uploadSingleFile = this.uploadSingleFile.bind(this);
        this.auth = new AuthService();
      }
      handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
         formData.append('file', this.state.file);
         formData.append('studJson',JSON.stringify(this.state.student));
        console.log("Test"+JSON.stringify(this.state.student));
        this.auth.addStudent(formData).then((response) => {
          console.log(response);
        })
    }
      handleChange(e){
        const { student } = { ...this.state };
        const currentState = student;
        const { name, value } = e.target;
        currentState[name] = value;
      
        this.setState({ student: currentState });
        console.log(""+JSON.stringify(this.state.student))
      }
      uploadSingleFile=(event) =>{
        
        this.setState({file:event.target.files[0], showUploadButton:true}, () =>{
          // file has been selected
          console.log(this.state.file)
        })
    }
      render() {
        return (
          <div className="animated fadeIn">
              <Row>
              <Col xs="10">
              <Card>
              <CardHeader>
                <strong>New Student</strong>
              </CardHeader>
              <CardBody>
              <Form  method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">First Name</Label>
                    </Col>
                    
                    <Col xs="12" md="9">
                      <Input type="text" required id="firstName" name="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={this.handleChange}/>
                    </Col>
                   
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Last Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Father Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="fatherName" name="fatherName" placeholder="Enter Father's Name" value={this.state.fatherName} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Mother Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="motherName" name="motherName" placeholder="Enter Mother's Name" value={this.state.motherName} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="email-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="email" id="emailId" name="emailId" placeholder="Enter Email" value={this.state.emailId} onChange={this.handleChange} autoComplete="email"/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">DOB</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="dob" name="dob" placeholder="date of birth" value={this.state.dob} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="address1" id="address1" rows="9"  placeholder="Address with pincode..." value={this.state.dob} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Mobile Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="mobileNum" name="mobileNum" placeholder="Enter Mobile Number" value={this.state.mobileNum} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Alternate Mobile Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="altMobileNum" name="altMobileNum" placeholder="Enter Alternative Number" value={this.state.altMobileNum} onChange={this.handleChange}/>
                    </Col>
                  </FormGroup>
                  {/* <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="saddress1" id="address1" value={this.state.address1} onChange={this.handleChange} >
                        <option value="0">Please select state</option>
                        <option value="1">Tamilnadu</option>
                        <option value="2">Kerala</option>
                        <option value="3">Andra Pradesh</option>
                      </Input>
                    </Col>
                  </FormGroup> */}
                  <FormGroup row>
                    <Col md="3">
                      <Label>Sex</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="sex" name="sex" value="option1"  onChange={this.handleChange}/>
                        <Label className="form-check-label" check htmlFor="inline-radio1">Male</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="radio" id="sex" name="sex" value="option2"  onChange={this.handleChange}/>
                        <Label className="form-check-label" check htmlFor="inline-radio2">Female</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Inline Checkboxes</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                        <Label className="form-check-label" check htmlFor="inline-checkbox1">One</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox2" name="inline-checkbox2" value="option2"/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox2">Two</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="inline-checkbox3" name="inline-checkbox3" value="option3" checked={this.state.sex} onChange={this.handleChange}/>
                        <Label className="form-check-label" check htmlFor="inline-checkbox3">Three</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-input">File input</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="file" id="file" name="file" onChange={this.uploadSingleFile} />
                    </Col>
                  </FormGroup>

                  </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" onClick={this.handleSubmit} size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
              </CardFooter>
              </Card>
            </Col>
              </Row>
            </div>)}
}
export default AddStudent;
