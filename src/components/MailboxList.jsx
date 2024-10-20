import React from 'react'
import { Link, useParams } from 'react-router-dom'

function MailboxList(props) {
  return (
    <>
    <div>MailboxList</div>
      {props.mailboxes.map((mail)=>(
        <Link key={mail._id} to={`/mailboxes/${mail._id}`}> {mail.boxHolder}</Link>
      ))}
    </>
  )
}

export default MailboxList