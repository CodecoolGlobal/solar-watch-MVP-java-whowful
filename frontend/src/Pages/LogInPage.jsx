import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const logInUser = async (body) => {
  try {
    const res = await fetch('/api/user/signin', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
    if (res.ok) {
      return await res.json()
    }
    alert("Incorrect credentials!")
  } catch (error) {
    console.error("Failed to log in: ", error)
  }
}

const LogInPage = ({ jwtSetter }) => {
  const [logInData, setLogInData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setLogInData({
      ...logInData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDataResponse = await logInUser(logInData)
    if (userDataResponse !== undefined) {
      localStorage.setItem("token", userDataResponse.jwt)
      jwtSetter(userDataResponse.jwt)
      console.log('User logged in:', logInData);
      navigate('/solarwatch')
    }
  };

  return (
    <div className='text-center my-32'>
      <h2 className='mb-10 text-2xl'>Please enter your credentials to log in!</h2>
      <form onSubmit={handleSubmit} className='py-12 border-4 border-gray-800 rounded-3xl w-6/12 bg-gray-300 mx-auto'>
        <div className='p-6'>
          <label htmlFor="username" className='pr-2'>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={logInData.username}
            onChange={handleChange}
            className='border-black border rounded-md px-1 w-6/12'
          />
        </div>
        <div className='p-6'>
          <label htmlFor="password" className='pr-2'>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={logInData.password}
            onChange={handleChange}
            className='border-black border rounded-md px-1 w-6/12'
          />
        </div>
        <button type="submit" className='p-2 m-2 rounded-xl text-white bg-gray-800 hover:bg-gray-600'>Log In</button>
      </form>
    </div>
  );
};

export default LogInPage;
