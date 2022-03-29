import React from "react";
import axios from "axios";

export default function Login() {
  const onLogin = (e) => {
    e.preventDefault();
    const credits = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    axios
      .post("/users/checklogin", credits)
      .then((res) => {
        if (res.data.status === 1) {
          console.log(res.data);
          alert(`${res.data.data} logged in successfully`);
          document.querySelector(".loggeduser").style.display = "block";
        } else if (res.data.status === 0) {
          console.log(res.data);
          alert(res.data.data);
        } else {
          console.log(res.data);
          alert("Error occured while validating user");
        }
      })
      .catch((errror) => alert(errror));
  };
  return (
    <div>
      <form className='form-container bg-light clearfix' onSubmit={onLogin}>
        <h1 className='text-center mb-4'> Login</h1>
        <div className='forum-group text-center'>
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
          <input type='submit' className='btn btn-success m-1' value='Login' />
        </div>
      </form>
    </div>
  );
}
