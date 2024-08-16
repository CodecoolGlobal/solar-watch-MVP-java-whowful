import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const registerUser = async (body) => {
  try {
    const res = await fetch('/api/user/register', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
  } catch (error) {
    console.error("Failed to register user: ", error)
  }
}

const RegistrationPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(registrationData)
    alert("Registration successful!")
    navigate('/login')
  };

  return (
    <div className='text-center my-32'>
      <h2 className='mb-10 text-2xl'>Please fill the form for registration!</h2>
      <form onSubmit={handleSubmit} className='py-12 border-4 border-gray-800 rounded-3xl w-6/12 bg-gray-300 mx-auto'>
        <div className="p-6">
          <label htmlFor="username" className='pr-2'>Username:</label>
          <input
            type="text"
            name="username"
            required
            value={registrationData.username}
            onChange={handleChange}
            className='border-black border rounded-md px-1 w-6/12'
          />
        </div>
        <div className="p-6">
          <label htmlFor="password" className='pr-2'>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={registrationData.password}
            onChange={handleChange}
            className='border-black border rounded-md px-1 w-6/12 '
          />
        </div>
        <button type="submit" className='p-2 m-2 rounded-xl text-white bg-gray-800 hover:bg-gray-600'>Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
