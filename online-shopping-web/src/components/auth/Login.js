import React, { Component } from "react";
import axios from "axios";

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
import { Redirect, Route } from "react-router-dom";
import Landing from "../../containers/landingPage/Landing";


class Login extends Component {
  state = {
    email: "",
    password: "",
    token:null,
    user:[]
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
    axios.post('login',this.state)
          .then(res => {
            this.state=res.data
            localStorage.setItem('token', this.state.token)      
            localStorage.setItem('username',this.state.user.username) 
            this.setState({token:this.state.token});
            this.setState({username:this.state.user.username});
            console.log(this.state.user.username)
            
          })
          .catch(err => {
            alert("Vui lòng kiểm tra lại thông tin đăng nhập!")
          }) 
    
    if( localStorage.getItem('token')!=null){
       return (<Redirect to="/" />)
    }
  };
 
  render() {
    const  direct = localStorage.getItem('token') ? <Redirect to="/"/>:null;
    return (
      <MDBContainer>
        <MDBRow>
          {direct}
          <MDBCol className="d-flex justify-content-center py-4" >
            <MDBFormInline onSubmit={this.handleSubmit} >
              <MDBCard  className="m-0">
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong style={{color:'Blue'}}>Đăng nhập</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="Nhập email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="username"
                    onChange={event => this.setState({email: event.target.value})}
                    className="form-group"
                    required
                  />
                  <MDBInput
                    label="Nhập mật khẩu"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                    name="password"
                    onChange={event => this.setState({password: event.target.value})}
                    required
                  />
                  <p className="font-small blue-text d-flex justify-content-end pb-3">
                    Quên
                    <a href="#!" className="blue-text ml-1">
                      mật khẩu?
                    </a>
                  </p>
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="submit"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a btn-radius"
                    >
                      Đăng nhâp
                    </MDBBtn>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                    Hoặc
                  </p>
                  <div className="row my-3 d-flex justify-content-center ">
                  <MDBBtn
                      type="button"
                      color="while"
                      rounded
                      className=" btn-radius mr-md-3 z-depth-1a"
                    >
                      <MDBIcon
                        fab
                        fas icon="fas fa-mobile-alt fa-2x"
                        className="blue-text text-center"
                      />
                    </MDBBtn>
                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className=" btn-radius mr-md-3 z-depth-1a"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-f fa-2x"
                        className="blue-text text-center"
                      />
                    </MDBBtn>

                    <MDBBtn
                      type="button"
                      color="white"
                      rounded
                      className=" btn-radius z-depth-1a"
                    >
                      <MDBIcon fab icon="google-plus-g fa-2x" className="blue-text" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
                <MDBModalFooter className="">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Bạn chưa có tài khoản?
                   <MDBLink to="/dangky" className=" blue-text ml-1 pt-0">Đăng ký</MDBLink>
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
export default Login;
