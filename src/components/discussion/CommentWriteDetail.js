import React, { useState } from 'react'
import styled from 'styled-components'
import ShowTempSec from './ShowTempSec';
import TemplatesBtn from './TemplatesBtn';
import CommentDetail from './CommentDetail';
import userPic from '../image/6.png';

const CommentWriteDetail = ({ comms, setComms }) => {

    const [showTempSec, setShowTempSec] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [userName, setUserName] = useState('kateShim');
    const [commentDate, setCommentDate] = useState('Fab9');
    
    const onSubmit = async (e) => {
      e.preventDefault();
      // console.log("comm: ", commentText, userName, commentDate)
      // console.log("setComms: ", setComms)

      // Add Comment 서버데이터 가가져져오오기
      const res = await fetch('http://localhost:5000/comms', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        // body: JSON.stringify(comms)
        body: JSON.stringify({
          text: commentText,
          user: userName,
          dayTime: commentDate
        })
      })
      // 
      const data = await res.json()

      setComms([ ...comms, data])
      console.log('data: ', data)

      setCommentText('')

    }
    // Update Comment
    const updateComment = (id) => {
      console.log('update', id);
      // const commToToggle = await fetchComm(id)
      // const updateComm = {...commToToggle, fetchComms }
      
      // const res = await fetch(`http://localhost:5000/comms/${id}`, {
      //   method: 'PUT',
      //   headers: {
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     text: commentText,
      //     user: userName,
      //     dayTime: commentDate
      //   })
      // })
  
      // const data = await res.json()
      // setComms([data.id ])
      // setComms(comms.map((comm) => comm.id === id ? {  } : comm))
  
    }

    
    return (
    <>
      {/* <WriteComment>
        <div>
          <UserPic></UserPic>
        </div>
        <CommentWriteDiv> */}
          <form onSubmit={onSubmit}>
            <CommentDiv>
              <TextareaDiv>
                <CommentTextarea 
                    placeholder="Add to the discussion" 
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    required="required"
                  >
                </CommentTextarea>
              </TextareaDiv>
                {/* When Click this below shows up */}
                <ClickedComment>
                {/* onClick: fill-rulehandleImageUpload(event,'main') */}
                {/* <input type="file" id="image-upload-main" name="file" accept="image/*" style="display:none" />
                <button type="button" className="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed"> 

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" className="crayons-icon">
                    <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                    <span className="hidden s:inline-block" aria-hidden="false">Upload image</span>
                </button> */}

                {/* <input type="file"></input> */}
                    <div>
                        <CommentBtn type="button" className="crayons-btn crayons-btn--s crayons-btn--icon-left crayons-btn--ghost-dimmed"> 
                            <CommentIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" className="crayons-icon">
                                <path d="M20 5H4v14l9.292-9.294a1 1 0 011.414 0L20 15.01V5zM2 3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993zM8 11a2 2 0 110-4 2 2 0 010 4z"></path>
                            </CommentIcon>
                            <span className="hidden s:inline-block" aria-hidden="false">Upload image</span>
                        </CommentBtn>
                        {/* 템플릿 버튼컴포넌트에 showTempBtn 프롭을 넘겨주므로 클릭이 될때마다 참 거짓이 되게 만든다. */}
                        <TemplatesBtn showTempBtn={() => setShowTempSec 
                            (!showTempSec)} 
                        />
                    </div>
                    <div>
                        {/* <EditorGuideA href="/p/editor_guide" className="crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon crayons-btn--s ml-auto" target="_blank" rel="noopener" title="Markdown Guide">
                            <EditorGuideIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="aavjw7frfmbytzvdh7guj9ucarn297m3" className="crayons-icon"><title id="aavjw7frfmbytzvdh7guj9ucarn297m3">Editor guide</title>
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                            </EditorGuideIcon>
                        </EditorGuideA> */}
                    </div>
                </ClickedComment>
            </CommentDiv>
            <div>
                {/* When Click Templates button shows up -> 
                showTempSec의 값이 참이면 showTempSec컴포넌트 보여주고
                거짓이면 빈값보이게한다.
                */}
                {showTempSec ? (
                    <ShowTempSec />
                ) : (
                    <></>     
                )}

                <CommentBtnDiv>
                    {commentText === '' ? (
                      <>
                        <SubmitBtnDis type="button" disabled>Button</SubmitBtnDis>
                        <PreViewBtnDis type="button" disabled>Preview</PreViewBtnDis>
                      </>
                    ) : (
                      <>
                        <SubmitBtn type="submit" value="Button"></SubmitBtn>
                        <PreViewBtn type="button">Preview</PreViewBtn>
                      </>
                    )}
                    
                    {/* When Click Preview button shows up */}
                    {/* <PreViewBtn>Continue editing</PreViewBtn> */}
                </CommentBtnDiv>
            </div>
        {/* <CommentDetail comms={comms} onDelete={onDelete} onUpdate={onUpdate} onInsert={onInsert} /> */}
          </form>
        {/* </CommentWriteDiv>
      </WriteComment> */}
      {/* CommentDetail */}
      {/* <CommentDetail comms={comms} onDelete={onDelete} onUpdate={onUpdate} /> */}
    </>
  );
};

// const WriteComment = styled.form`
//   display: flex;
// `;
// const UserPic = styled.img.attrs({
//   src: `${userPic}`
// })`
//   width: 32px;
//   height: 32px;
//   margin-right: 8px; 
//   border-radius: 32px;
//   display: inline-block;
//   vertical-align: bottom;
// `;
// const CommentWriteDiv = styled.div`
//   width: 100%;
// `;
const CommentDiv = styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  margin-bottom: 12px;
  &:focus-within {
    border-color: #3b49df;
    0 0 0 1px #3b49df;
  }
`;
const TextareaDiv = styled.div`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
const CommentTextarea = styled.textarea`
  padding: 8px;
  margin: 0;
  outline: none;
  width: -webkit-fill-available;
  box-shadow: none;
  border: none;
  transition: none 0s ease 0s; 
  height: 129px;
  background: transparent;
  &:hover {
    resize: none;
  }
`;
const ClickedComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d6d6d7;
  padding: 4px;
`;
const CommentBtn = styled.button`
  border: 0;
  outline: 0;
  vertical-align: middle;
  background-color: transparent;
  padding: 4px 12px 4px 8px;
  &:hover {
    background-color: rgba(0,0,0,0.035);
    border-color: transparent;
    box-shadow: none;
    color: #090909;
    border-radius: 0.375rem;
  } 
`;
const CommentIcon = styled.svg`
  vertical-align: middle;
  padding: 4px 12px 4px 8px;
  font-size: 14px;
  fill: #717171;
`;
// const EditorGuideA = styled.a``;
// const EditorGuideIcon = styled.svg`
//   fill: #717171;
//   font-size: 14px;
//   padding: 4px;
//   &:hover {
//     background-color: rgba(0,0,0,0.035);
//     border-color: transparent;
//     box-shadow: none;
//     color: #090909;
//     border-radius: 0.375rem;
//   }
// `;
const CommentBtnDiv = styled.div`
  margin-bottom: 16px;
`;
const SubmitBtnDis = styled.button`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  opacity: 0.6;
    cursor: not-allowed;
`;
const PreViewBtnDis = styled.button`
  color: #3d3d3d;
  font-size: 16px;
  background: #d6d6d7;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  opacity: 0.6;
    cursor: not-allowed;
`;

const SubmitBtn = styled.input`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  border-radius: 0.375rem;
  border: 0;
  outline: 0;
  &:hover {
    background-color: #2f3ab2;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #f9f9f9;
  }
`;
const PreViewBtn = styled.button`
  color: #3d3d3d;
  font-size: 16px;
  background: #d6d6d7;
  margin: 0 8px 0 0;
  padding: 8px 16px;
  &:hover {
    background-color: #bdbdbd;
    border-color: transparent;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    color: #090909;
  }
`;
export default CommentWriteDetail