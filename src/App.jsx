import { useState } from 'react'
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newBox) =>{
    newBox._id = mailboxes.length + 1
    setMailboxes([...mailboxes, newBox])
    // It should accept form data for a new mailbox and setMailboxes state accordingly.
  }


  return(
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route
            path="/mailboxes"
            element={<MailboxList mailboxes={mailboxes}/>}
          />
          <Route
            path="/new-mailbox"
            element={<MailboxForm addBox={addBox} />}
          />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes}/>}
          />
        </Routes>
    </>
  )
};


export default App
