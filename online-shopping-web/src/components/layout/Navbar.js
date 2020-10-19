import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i>Trang chủ
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/dangky'>Đăng ký</Link>
        </li>
        <li>
          <Link to='/dangnhap'>Đăng nhập</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
