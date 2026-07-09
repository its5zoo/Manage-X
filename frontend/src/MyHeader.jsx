import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./MyHeader.css"

const MyHeader = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="header">
      <div className="header-spacer" />

      <div className="header-brand">
        <h1>MΛПΛGΞ X</h1>
        <p>𝙴𝚟𝚎𝚛𝚢𝚝𝚑𝚒𝚗𝚐 𝚈𝚘𝚞 𝙽𝚎𝚎𝚍, 𝙰𝚕𝚕 𝚒𝚗 𝙾𝚗𝚎 𝙿𝚕𝚊𝚌𝚎.</p>
        <p>𝙱𝚘𝚘𝚔 • 𝙼𝚊𝚗𝚊𝚐𝚎 • 𝙾𝚛𝚐𝚊𝚗𝚒𝚣𝚎 𝚠𝚒𝚝𝚑 𝙴𝚊𝚜𝚎.</p>
      </div>

      <div className="header-auth">
        {isLoggedIn ? (
          <Link to="/" className="ms-2" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login" className="header-login-btn">
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default MyHeader