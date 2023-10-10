import React, { useEffect, useState } from 'react';
import './Rank.css';
import axios from "axios";
import { format } from "timeago.js";
import { Link } from 'react-router-dom';

const Rank = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("/users");
      setUsers(response.data);
    };
    fetchUsers()
  }, [])

  return (
    <div className='Rank'>
      <div className='blaank'></div>
      {users.map((user, i) => (
        <div key={user._id} className='rank-map'>
          <div className='user-name'>{i === 0 ? "👑" + "1位 " + user.username : i + 1 + "位 " + user.username}</div>
          <div className="time-score">
            <div className='user-score'>{"連続正解数: " + user.score}</div>
            <div className='user-time'>{format(user.createdAt)}</div>
          </div>
        </div>
      ))}
      <li className='take' >
        <Link to="/" className='takeBack'>戻る</Link>
      </li>
    </div>
  )
}

export default Rank