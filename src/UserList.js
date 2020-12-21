import React, { useState, useEffect } from "react";
import axios from "axios";
import profilePhoto from "./image/me.jpg";
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="userslist">
      {users.map((user) => {
        return (
          <div className="profil-card">
            <div className="profil-img">
              <img src={profilePhoto} alt="" />
            </div>
            <div class="social">
              <h2>{user.name}</h2>
              <p className="description">{user.username}</p>
              <p className="description">{user.email}</p>
              <div className="adress">
                <p className="title">Adress :</p>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
              </div>
              <div className="contact">
                <p className="title">Phone Number :</p>
                <span>{user.phone}</span>
                <p className="title">Website :</p>
                <span>{user.website}</span>
                <p className="title"> company :</p>
                <span>{user.company.name}</span>
                <p className="description">{user.company.catchPhrase}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserList;