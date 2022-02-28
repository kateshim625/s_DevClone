import React, { useState } from 'react'
import styled from 'styled-components'
import ShowTempSec from '../ShowTempSec';
import TemplatesBtn from '../TemplatesBtn';
import userPic from '../../image/6.png';
import EditFooter from './EditFooter';
import { useNavigate } from 'react-router-dom';

const Edit = ({ comm }) => {

  const [showTempSec, setShowTempSec] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [userName, setUserName] = useState('kateShim');
  const [commentDate, setCommentDate] = useState('Feb 1');
  const [editComp, setEditComp] = useState(false);
  const [backBtn, setBackBtn] = useState(false);

  //뒤로이동
  const navigate = useNavigate();
  if(editComp || backBtn) {
    // await submitForm(e.target);
    navigate('/comms', { replace: true });
  } 
  
  const onBackClick = () => {
    setBackBtn(true);
  }
  console.log("setBackBtn_E: ", setBackBtn)
  
  const id = comm.id
  // Update Comment
  const onEditSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/comms/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        text: commentText,
        user: userName,
        dayTime: commentDate
      })
    })
    const data = await res.json()
    console.log("data_E: ", data)

    // 이부분활성시키니 map 에러남
    // setComms()
    // console.log("setComms_E: ", setComms)

    setCommentText('')
    console.log("setCommentText_E: ", setCommentText)

    // 값변경시켜주려면 셋으로
    setEditComp(true)
    console.log("setEditComp_E2: ", editComp)
  }
  return (
    <>
      <EditingComment>
        
        <WriteComment>
          <div>
            <div>
              <SubjectH1>Editing comment</SubjectH1>
            </div>
          </div>

          <WriteCommentStart>
            <div>
              <UserPic></UserPic>
            </div>
            <CommentWriteDiv>
              <form onSubmit={onEditSubmit}>
                <CommentDiv>
                  <TextareaDiv>
                    <CommentTextarea 
                        placeholder={comm.text} 
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required="required"
                      >
                    </CommentTextarea>
                  </TextareaDiv>

                    <ClickedComment>

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
                            <EditorGuideA href="/p/editor_guide" className="crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon crayons-btn--s ml-auto" target="_blank" rel="noopener" title="Markdown Guide">
                                <EditorGuideIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-labelledby="aavjw7frfmbytzvdh7guj9ucarn297m3" className="crayons-icon"><title id="aavjw7frfmbytzvdh7guj9ucarn297m3">Editor guide</title>
                                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                                </EditorGuideIcon>
                            </EditorGuideA>
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
                        <SubmitBtn type="submit">Submit</SubmitBtn>
                        <PreViewBtn type="submit">Preview</PreViewBtn>
                        {/* When Click Preview button shows up */}
                        <DismissBtn onClick={onBackClick}>Dismiss</DismissBtn>
                    </CommentBtnDiv>
                </div>
              </form>

              {/* <CommentWriteDetail onUpdate={onUpdate}/> */}

            </CommentWriteDiv>
          </WriteCommentStart>

        </WriteComment>
      </EditingComment>
      <EditFooter />
    </>
  )
}
const WriteCommentStart = styled.div`
  display: flex;
`;
const EditingComment = styled.div`
  padding: 16px;
  margin: 0 147px;
  color: #171717;
  font-size: 16px;

`;
const SubjectH1 = styled.h1`
  font-size: 30px;
  color: #090909;
  font-weight: 700;
  margin: 0 0 24px;
`;
// const WriteComment = styled.form`
const WriteComment = styled.div`
  padding: 32px 64px;
  background: #ffffff;
  border-radius: 0.375rem;

`;
const UserPic = styled.img.attrs({
  src: `${userPic}`
})`
  width: 32px;
  height: 32px;
  margin-right: 8px; 
  border-radius: 32px;
  display: inline-block;
  vertical-align: bottom;
`;
const CommentWriteDiv = styled.div`
  width: 100%;
`;
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
const EditorGuideA = styled.a``;
const EditorGuideIcon = styled.svg`
  fill: #717171;
  font-size: 14px;
  padding: 4px;
  &:hover {
    background-color: rgba(0,0,0,0.035);
    border-color: transparent;
    box-shadow: none;
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const CommentBtnDiv = styled.div`
  margin-bottom: 16px;
`;
const SubmitBtn = styled.button`
  color: #f9f9f9;
  font-size: 16px;
  background: #3b49df;
  margin: 0 8px 0 0;
  padding: 8px 16px;
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
const DismissBtn = styled.a`
  color: #3d3d3d;
  font-size: 16px;
  padding: 8px 16px;
  &:hover {
    border-radius: 0.375rem;
    color: #090909;
    background: #00000009;
  }
`;
export default Edit