import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
  MDBTabContent,
  MDBFormInline,
  MDBLink,
} from "mdbreact";
import "./Login.css";

class Register extends Component {
  state = {
      fullName:null,
      username: null,
      password: null
  }
  error
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.fullName)
    console.log(this.state.username)
    console.log(this.state.password)
    if(this.state.password!=this.state.confirmPassword){
      alert("Mật khẩu không khớp!");
    }

  };
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="d-flex justify-content-center py-4" >
            <MDBFormInline onSubmit={this.handleSubmit} >
              <MDBCard  className="m-0">
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong style={{color:'Red'}}>Đăng ký</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="Nhập họ tên"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    name="fullName"
                    onChange={event => this.setState({fullName: event.target.value})}
                    className="form-group"
                  />
                  <MDBInput
                    label="Nhập email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="username"
                    onChange={event => this.setState({username: event.target.value})}
                    className="form-group"
                  />
                  <MDBInput
                    label="Nhập mật khẩu"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                    name="password"
                    onChange={event => this.setState({password: event.target.value})}
                   
                  />
                   <MDBInput
                    label="Nhập lại mật khẩu"
                    group
                    type="password"
                    validate
                    containerClass="mt-0"
                    name="confirmPassword"
                    onChange={event => this.setState({confirmPassword: event.target.value})}
                   
                  />
                 
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="submit"
                      gradient="red"
                      rounded
                      className="btn-block z-depth-1a btn-radius btn-gradient-registry"
                    >
                      Đăng ký
                    </MDBBtn>
                  </div>
                 
                </MDBCardBody>
                <MDBModalFooter className="">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Bạn đã có tài khoản?
                   <MDBLink to="/dangnhap" className=" blue-text ml-1 pt-0">Đăng nhập</MDBLink>
                  </p>
                </MDBModalFooter>
              </MDBCard>
            </MDBFormInline>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Register;
