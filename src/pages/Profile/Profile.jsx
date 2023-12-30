import React, { useEffect, useState } from 'react';
import mockUser from '../../mocks/mock-profile';
import BgProfile from '../../assets/images/bg-profile.svg'
import { NavLink, Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Profile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    setUser(JSON.parse(Cookies.get("user") || null));
  }, []);
  
  const containerStyle = {
    backgroundImage: `url(${BgProfile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%', 
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2px',
  };

  const card = {
    borderRadius: '15px',
    width: '350px',
    height: '40px',
    border: '1px solid rgba(200, 208, 217, 0.70)',
    backgroundColor: 'rgba(200, 208, 217, 0.00)',
  };

  return (
    <div>
      <div style={containerStyle} className='position-relative '>
        <div className="position: absolute max-w-[700px] text-white flex flex-col w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <h2 className='font-bold text-center text-[30px]'>THÔNG TIN CÁ NHÂN</h2>
            <ul role="list" style={{ padding: '60px 40px' }} className="divide-y divide-gray-200 dark:divide-gray-700 list-none">
              <li className='flex justify-between mb-6 border-none align-center'>
                <div>Tên tài khoản:</div>
                <div style={card}>
                  <span style={{ lineHeight: '40px' }} className='text-center flex justify-center items-center'>{user?.name}</span>
                </div>
              </li>
              <li className='flex justify-between mb-6 border-none align-center'>
                <div>Email:</div>
                <div style={card}>
                  <span style={{ lineHeight: '40px' }} className='text-center flex justify-center items-center'>{user?.email}</span>
                </div>
              </li>
              <li className='flex justify-between border-none align-center'>
                <div>Điện thoại:</div>
                <div style={card}>
                  <span style={{ lineHeight: '40px' }} className='text-center flex justify-center items-center'>{user?.phone}</span>
                </div>
              </li>
            </ul>
            <div className='flex justify-between no-underline'>
              <Link to={"/forgot-passwork"}><span className='text-[red] no-underline' >Đổi mật khẩu</span></Link>
              <Link to={"/update-profile"}><span>Cập nhật thông tin cá nhân</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile

