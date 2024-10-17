import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/mailboxes">Mailboxes</Link>
        <Link to="/new-mailbox">New Mailbox</Link>
    </>
  )
}

export default NavBar