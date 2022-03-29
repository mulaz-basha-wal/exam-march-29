import axios from "axios";
import React, { useState, useEffect } from "react";

export default function LoggedUser() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get("/users/loggeduser").then((res) => {
      if (res.data.status === 0) {
        alert(res.data.debug_data);
      } else {
        console.log(res.data);
        setUser(res.data.result[0]);
      }
    });
  }, []);
  return (
    <div className='bg-light'>
      <h1>Logged User</h1>
      {user ? (
        <div>
          id: {user.id}, username :{user.username}, password: {user.password}
        </div>
      ) : null}
    </div>
  );
}
