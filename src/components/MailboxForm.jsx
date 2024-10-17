import React, { useState } from 'react'

const initalState={
  boxSize: '',
  boxHolder: '',
}

const MailboxForm = (props) => {
  
  
  const [formData, setFormData] = useState(initalState)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(formData)
    props.addBox(formData)
    setFormData(initalState)
  }

  return (
    <main>
      <h1>New Mailbox</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor='boxholder'>Name of owner:</label>
          <input type="text" name='boxHolder'id='boxHolder' value={formData.boxHolder} onChange={handleChange}/>


          <label htmlFor='boxSize-select'>What size of box?</label>
          <select name="boxSize" id="boxSize-select" onChange={handleChange}>
            <option></option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

          <button type='submit'>Add mailbox</button>
      </form>
    </main>
  )
}

export default MailboxForm