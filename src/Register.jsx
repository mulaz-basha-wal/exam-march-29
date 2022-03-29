import axios from "axios";
import React from "react";

export default function Register() {
  const onRegister = (e) => {
    e.preventDefault();
    axios
      .post("/users", {
        id: e.target.id.value,
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        if (res.data.status === 1) {
          alert("user created");
        } else if (res.data.status === 0) {
          alert("user already exists");
        } else {
          alert("Error occured while creating user");
        }
      })
      .catch((errror) => alert(errror));
  };
  return (
    <div>
      <form className='form-container bg-light clearfix' onSubmit={onRegister}>
        <h1 className='text-center mb-4'> Register</h1>
        <div className='forum-group text-center'>
          <input
            type='number'
            name='id'
            className='form-control'
            placeholder='ID'
          />
          <input
            type='text'
            name='username'
            className='form-control'
            placeholder='Username'
          />
          <input
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'
          />
          <input
            type='submit'
            className='btn btn-success m-1'
            value='Register'
          />
        </div>
      </form>
    </div>
  );
}
