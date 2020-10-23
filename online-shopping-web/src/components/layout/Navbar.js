import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';




const Navbar = (props) => {
  const show = () => {
    if (window.alert("Liên hệ với chúng tôi: 0345678912.") == true) {
      this.alert.onCancel();
    }
  }

let obj={
  dangnhap:"Đăng nhập",
  link:"dangky",
  dangky:"Đăng ký"
}
const token=localStorage.getItem('token')
if(token!=null){
  obj.dangnhap=localStorage.getItem('username');
  obj.dangky="Đăng xuất"
 
}
  return (
    
    <nav className='navbar'>
      <h1>
        <Link to='/'>Trang chủ</Link>
      </h1>
      <ul>
        
        <li>
           <Link to='/dangnhap'>{obj.dangnhap}</Link>
        </li>
        <li>
           <Link to='/dangky'>{obj.dangky}</Link>
        </li>
        <li>
          <Link onClick={()=>show()}>Liên hệ</Link>
        </li>
      </ul>


    </nav>
  );
};

export default Navbar;

