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

class Login extends Component {
  state = {
    username: null,
    password: null
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(this.state.username)
    console.log(this.state.password)
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
                        icon="fa-mobile-alt fa-2x"
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
