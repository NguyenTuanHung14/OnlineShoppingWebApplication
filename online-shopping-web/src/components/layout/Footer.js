import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className=" text-center bg footer">
                    <div style={{ color: 'white' }} className="row">
                        <div className="col col-3">
                            <h5>ABOUT US</h5>
                            <p>Web bán hàng online</p>
                        </div>
                        <div className="col col-3">
                            <h5>CONTACT</h5>
                            <p>0345678912</p>
                        </div>
                        <div className="col col-lg-3">
                            <h5>FOLLOW US</h5>
                            <a className=" text-primary btn-floating btn-lg btn-fb" type="button" role="button"><i  className="fab fa-facebook-square fa-2x"></i></a>
                            <a className=" text-danger btn-floating btn-lg btn-ins" type="button" role="button"><i className="fab fa-instagram fa-2x"></i></a>
                        </div>
                        <div className="col col-3">
                            <h5>MEMBER</h5>
                            <p>Vân Anh</p>
                            <p>Tuấn Hùng</p>
                            <p>Thanh Nhân</p>
                            <p>Thanh Ngân</p>
                            <p>Thanh Trúc</p>
                            <p>Ngọc Tuyền</p>
                        </div>
                    </div>
                    <span className="text-muted">All Right Reserved 2020 @N-H-A-T</span>
                </footer>
            </div>
        )
    }
}
export default Footer