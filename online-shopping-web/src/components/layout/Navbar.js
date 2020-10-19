import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';



const Navbar = () => {
  const show = () => {
    if (window.alert("Liên hệ với chúng tôi: 0345678912.") == true) {
      this.alert.onCancel();
    }
  }

  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>Trang chủ</Link>
      </h1>
      <ul>
        <li>
          <Link to='/dangky'>Đăng ký</Link>
        </li>
        <li>
          <Link to='/dangnhap'>Đăng nhập</Link>
        </li>
        <li>
          <Link onClick={()=>show()}>Liên hệ</Link>
        </li>
      </ul>


    </nav>
  );
};

export default Navbar;

