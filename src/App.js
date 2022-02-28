// import Main from "./Main";
import styled from 'styled-components';
import React, { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigator from "./components/Navigator";
import Discussion from "./components/Discussion";
import Delete from "./components/discussion/edit/Delete";
import Edit from "./components/discussion/edit/Edit";



function App() {
  const [comms, setComms] = useState([])
  // console.log("setComms_App: ", setComms)

  return (
    <Router>
      <BackgroundStyle className="App">
        <Routes>
          <Route exact path='/comms' element={<Discussion comms={comms} setComms={setComms}/>} />
          <Route path='/comms/delete' element={<Delete />}/>
          {comms.map((comm, index) => (
            <Route path={`/comms/edit/${comm.id}`} key={index} element={
              <Edit comm={comm} />
            } />)
          )}
          {/* <Route path='/comms/edit' element={<CommentWriteDetail />} /> */}
          {/* comms={comms} setComms={setComms} comm={comm} onEditClick={onEditClick} */}
          <Route exact path='/' element={<Navigator comms={comms} setComms={setComms} />}/>
        </Routes>
      </BackgroundStyle>
    </Router>
  );
}

const BackgroundStyle = styled.div`
  background-color: rgb(245, 245, 245);
  font-family: inherit;
  width: 1248px;
  margin: 0 auto;
`;

export default App;
