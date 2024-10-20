import React from 'react'
import { Link, useParams } from 'react-router-dom'

function MailboxList(props) {
  return (
    <>
    <div>MailboxList</div>
    <ul>
      {props.mailboxes.map((mail)=>(
        <li className='mail-box'>
        <Link key={mail._id} to={`/mailboxes/${mail._id}`}>{mail.boxHolder}</Link>
        </li>
      ))}
    </ul>  
    </>
  )
}

export default MailboxList