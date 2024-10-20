import React from 'react'
import { useParams } from 'react-router-dom'

const  MailboxDetails = (props) => {
  const {mailboxId} = useParams()
  const foundMail = props.mailboxes.find( m => m._id === Number(mailboxId))
  console.log(foundMail)
  return (
    <div>
      <h1>Mailbox Deatils</h1>
      <h2>Owner: {foundMail.boxHolder}</h2>
      <h3>Size: {foundMail.boxSize}</h3>
    </div>
  )
}

export default MailboxDetails