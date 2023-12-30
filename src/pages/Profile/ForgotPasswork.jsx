import React, { useState, useEffect } from 'react';
import BgProfile from '../../assets/images/bg-profile.svg';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPasswork() {
  const [user, setUser] = useState(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
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

  const handleSaveChanges = async () => {
    if (!currentPassword || !newPassword || newPassword !== confirmNewPassword) {
      setError('Invalid input. Please check your input fields.');
      return;
    }

    try {
      const response = await axios.put(
        'http://localhost:9090/api/users/update-password',
        {
          email: user?.email,
          password: newPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (user?.updatePasswordInDatabase) {
        user.updatePasswordInDatabase(newPassword);
      }
      alert('Password updated successfully!');
      navigate('/profile');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Failed to update password. Please try again.');
      } else if (error.request) {
        setError('No response received from the server. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <div style={containerStyle} className="position-relative ">
        <div className="position: absolute max-w-[700px] text-white flex flex-col w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flow-root">
            <h2 className="font-bold text-center text-[30px]">ĐỔI MẬT KHẨU</h2>
            {error && <div className="text-red-400 pt-2 text-center">{error}</div>}
            <ul
              role="list"
              style={{ padding: '60px 40px' }}
              className="divide-y divide-gray-200 dark:divide-gray-700 list-none"
            >
              <li className="flex justify-between mb-6 border-none align-center">
                <div>Mật khẩu hiện tại:</div>
                <div style={card}>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="px-2 border-none"
                    style={card}
                  />
                </div>
              </li>
              <li className="flex justify-between mb-6 border-none align-center">
                <div>Mật khẩu mới:</div>
                <div style={card}>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="px-2 border-none"
                    style={card}
                  />
                </div>
              </li>
              <li className="flex justify-between border-none align-center">
                <div>Nhập lại mật khẩu mới:</div>
                <div style={card}>
                  <input
                    type="password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="px-2 border-none"
                    style={card}
                  />
                </div>
              </li>
            </ul>
            <div className="flex justify-between">
              <Link to="/profile">
                {' '}
                <span className="text-[red] p-3">Hủy</span>
              </Link>
              <span onClick={handleSaveChanges} className="p-3 bg-success cursor-pointer">
                Lưu thay đổi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswork

