import React, { useEffect, useState } from 'react';
import BgProfile from '../../assets/images/bg-profile.svg';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

function UpdateProfile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(Cookies.get('user') || null));
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

  const handleSaveUpdate = async () => {
    // Validate input fields
    if (!name || !phone) {
      setError('Name and phone number are required.');
      return;
    }

    try {
      // Call your API to update the user profile using Axios
      const response = await axios.put(
        `http://localhost:9090/api/users/${user?.id}`,
        {
          name,
          phone,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Check if the update was successful
      if (response.data.success) {
        // Update the user object locally with the new information
        setUser((prevUser) => ({
          ...prevUser,
          name,
          phone,
        }));

        // Remove the old cookie
        Cookies.remove('user');

        // Update the cookie with the new user information
        const updatedUser = { ...user, name, phone };
        Cookies.set('user', JSON.stringify(updatedUser));

        alert('Profile updated successfully!');
        navigate('/profile');
      } else {
        setError(response.data.message || 'Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('An error occurred while updating the profile:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BgProfile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2px',
        }}
        className="position-relative"
      >
        <div className="max-w-[700px] text-white flex flex-col w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <h2 className="font-bold text-center text-[30px]">CẬP NHẬT CÁ NHÂN</h2>
            <ul role="list" style={{ padding: '60px 40px' }} className="divide-y divide-gray-200 dark:divide-gray-700 list-none">
              <li className='flex justify-between mb-6 border-none align-center'>
                <div>Email:</div>
                <div style={card}>
                  <span style={{ lineHeight: '40px' }} className='text-center flex justify-center items-center'>{user?.email}</span>
                </div>
              </li>

              <li className="flex justify-between mb-6 border-none align-center">
                <div>Tên tài khoản:</div>
                <div style={card}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-2 border-none"
                    style={card}
                  />
                </div>
              </li>
              <li className="flex justify-between mb-6 border-none align-center">
                <div>Điện thoại:</div>
                <div style={card}>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="px-2 border-none"
                    style={card}
                  />
                </div>
              </li>
            </ul>

            <div className="flex justify-between no-underline">
              <Link to="/profile">
                <span className="text-[red] no-underline">Hủy</span>
              </Link>
              <span onClick={handleSaveUpdate} className="p-3 bg-success cursor-pointer">
                Cập nhật
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
