import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CommentWriteDetail from './discussion/CommentWriteDetail';
import EditFooter from './discussion/edit/EditFooter';
import CommentDetail from './discussion/CommentDetail';

const Discussion = ({ comms, setComms }) => {
  // console.log("setComms_Discussion: ", setComms)

  // const [comms, setComms] = useState([])
  // useEffect(() => {
  //   const getComms = async () => {
  //     const commsFromServer = await fetchComms()
  //     setComms(commsFromServer)
  //   }
  //   getComms()
  // }, [])

  // Fetch Comms
  //또 사용가능성이있기에 유즈이펙트밖에 내놓음
  const fetchComms = async () => {
    const res = await fetch('http://localhost:5000/comms')
    const data = await res.json()
    // console.log("data: ", data)
    return setComms(data)
  }

    //Fetch Comm
    const fetchComm = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      console.log(data)
      return data
    }
  // Delete Comment 
  const deleteComment = async (id) => {
    await fetch(`http://localhost:5000/comms/${id}`, {
      method: 'DELETE'
    })
    console.log('delete', id);
    setComms(comms.filter((comm) => comm.id !== id))
  }
  // Update Comment
  // const updateComment = (id) => {
  //   console.log('update', id);
  //   //2
  //   // const commToToggle = await fetchComm(id)
  //   // const updateComm = {...commToToggle, fetchComms }
  //   // const res = await fetch(`http://localhost:5000/comms/${id}`, {
  //   //   method: 'PUT',
  //   //   headers: {
  //   //     'Content-type': 'application/json'
  //   //   },
  //   //   body: JSON.stringify({
  //   //     text: 
  //   //   })
  //   // })

  //   // const data = await res.json()
    
    
  //   //1
  //   setComms(comms.map((comm) => comm.id === id ? { ...comms } : comm))

  // }
  // const addingComment = () => {
  //   console.log("adding...");
    
  // }
  useEffect(() => {
    fetchComms()
  }, [])

  return (
    <>

    <CommentSection>
      <div>
        <DiscussionHeader>
          <div>
            <SubjectH2>Discussion ({comms.length})</SubjectH2>
          </div>
          <Subscribe>
            <SubscribeDiv>
              <SubscribeBtn type="button">Subscribe</SubscribeBtn>
            </SubscribeDiv>
            {/* When Click Subscribe shows up */}
            <SubscribeBtnDiv>
              <SortBtn className="crayons-btn crayons-btn--outlined crayons-btn--icon" type="button" id="subscription-settings-btn" data-testid="subscription-settings" aria-expanded="true" aria-controls="subscription-settings-dropdown" aria-haspopup="true">
                <SortIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-labelledby="ai2ols8ka2ohfp0z568lj68ic2du21s" className="crayons-icon"><title id="ai2ols8ka2ohfp0z568lj68ic2du21s">Preferences</title>
                  <path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z">Subscribe</path>
                </SortIcon>
              </SortBtn>
            </SubscribeBtnDiv>
          </Subscribe>
        </DiscussionHeader>
        {/* writing comment area */}
        {/* 댓글작성부분 */}
        <CommentWriteDetail comms={comms}
          // onDelete={deleteComment}
          // onUpdate={updateComment}
          setComms={setComms}
          // onAddComment={() => addingComment()} 
        />
        {comms.length > 0 ? (
          <CommentDetail comms={comms} onDelete={deleteComment} setComms={setComms} />
        ) : (
          <></>
        )}

        <FooterDiv>
          <button type="button">Code of Conduct</button>
          <FooterSpan> • </FooterSpan>
          <button type="button">Report abuse</button>
        </FooterDiv>
      </div>
    </CommentSection>
    <EditFooter />
    </>
  );
};
const CommentSection = styled.section`
    background: rgb(255, 255, 255);
    box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.1);
    margin: 0 0 16px;
    padding: 32px 48px;
    position: relative;
    border-radius: 0.375rem;
`;
const DiscussionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const SubjectH2 = styled.h2`
  font-size: 24px;
  color: #242424;
  font-weight: 700;
`;
const Subscribe = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d6d6d7;
  display: flex;
  vertical-align: baseline;
`;
const SubscribeDiv = styled.div`
  border-right: 1px solid #d6d6d7;
  vertical-align: middle;
  &:hover {
    background-color: rgba(0,0,0,0.035);
    border-color: #a3a3a3;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    color: #090909;
  }
`;
const SubscribeBtnDiv = styled.div`
  vertical-align: middle;
`;
const SubscribeBtn = styled.button`
  border: 0;
  outline: 0;
  padding: 6px 14px;
  font-size: 16px;
  color: #3D3D3D;
  webkit-appearance: none;
  vertical-align: middle;
  background-color: transparent;
`;
const SortBtn = styled.button`
  background-color: transparent;
  border: 0;
  outline: 0;
  &:hover {
    background-color: rgba(0,0,0,0.035);
    border-color: #a3a3a3;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    color: #090909;
  }
`;
const SortIcon = styled.svg`
  margin: 0 0 0 -2px;
  padding: 6px;
  fill: #717171;
  vertical-align: middle;
`;
const FooterSpan = styled.span``;
const FooterDiv = styled.div`
  text-align: center;
  color: #717171;
  font-size: 14px;
  ${FooterSpan} {
    padding: 0 8px;
  }
`;
export default Discussion