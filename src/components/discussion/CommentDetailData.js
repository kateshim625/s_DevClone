import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Edit from './edit/Edit';

const CommentDetailData = ({ comms, comm, onDelete }) => {
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  // console.log("setComms_CDD: ", setComms)

  return (
    <CommentDoneSection>
        <UserInfoDiv>
            <UserInfo>
            <UserNameBtn type="button">{comm.user}</UserNameBtn>
            <UserInfoSpan> • </UserInfoSpan>
            <CommentTime>{comm.dayTime}</CommentTime>
            </UserInfo>
            <div>
            {/* 댓글 더보기옵션 버튼 클릭 토글 */}
            <span onClick={() => setShowMoreBtn(!showMoreBtn)}>
                <MoreIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a32utvszhlbfuu9s4mmda4ehwi4to6yk" className="crayons-icon pointer-events-none">
                    <title id="a32utvszhlbfuu9s4mmda4ehwi4to6yk">Dropdown menu</title>
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.25 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.75 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </MoreIcon>
            </span>
            </div>
            {/* 댓글 더보기옵션 버튼 클릭시 수정 삭제 보여주고 숨기기 */}
            {showMoreBtn ? (
                <MoreHiddenMenuDiv>
                    <ul>
                        {/* 클릭한곳의 아이디를 가져오고 그 아이디만 삭제할수있도록 할수있다. Discussion.js > deleteComment 참고 */}
                        <MoreMenus onClick={() => onDelete(comm.id)}>Delete</MoreMenus>
                        {/* <Link to="/comms/delete"><MoreMenus comm={comm} onDelete={onDelete}>Delete</MoreMenus></Link> */}
                        {/* <MoreMenus onClick={() => onUpdate(comm.id)} comm={comm}>Edit</MoreMenus> */}
                        <Link to={`/comms/edit/${comm.id}`} ><MoreMenus>Edit{comm.id}</MoreMenus></Link>
                    </ul>
                </MoreHiddenMenuDiv>
            ) : (
                <></>    
            )}
        </UserInfoDiv>
        <CommentContent>
            <p>{comm.text}</p>
        </CommentContent>
    </CommentDoneSection>
  );
};
const CommentDoneSection =styled.div`
  border-radius: 0.375rem;
  border: 1px solid #d4d4d4;
  color: #171717;
  font-size: 16px; 
  background: #ffffff;
  padding: 4px;
`;
const UserInfoDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px 0;
`;
const UserInfo = styled.div`
  color: #171717;
  font-size: 16px;
`;
const UserNameBtn = styled.button`
  background-color: transparent;
  color: #3d3d3d;
  font-size: 16px;
  margin: -4px 0 -4px -4px;
  padding: 4px; 
  &:hover {
    background-color: rgba(0,0,0,0.035);
    border-color: transparent;
    box-shadow: none;
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const UserInfoSpan = styled.span`
  color: #bdbdbd;
  font-size: 16px;
  padding: 0 8px 0 0;
`;
const CommentTime = styled.time`
  color: #717171;
  font-size: 14px;
`;
const MoreIcon = styled.svg`
  fill: #3d3d3d;
  padding: 4px;
  &:hover {
    background-color: rgba(0,0,0,0.035);
    color: #090909;
    border-radius: 0.375rem;
  }
`;
const MoreHiddenMenuDiv = styled.div`
  position: absolute;
  top: 100%;
  right: 0%;
  color: #171717;
  font-size: 16px;
  background: #ffffff;
  margin: 4px 0 0;
  padding: 8px;
  border-radius: 0.375rem;
  max-width: 360px;
  min-width: 250px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  border: 1px solid #d4d4d4; 
`;
  const MoreMenus = styled.div`
  color: #404040;
  font-size: 16px;  
  padding: 8px;
  border-radius: 0.375rem;

  &:hover {
      color: #2f3ab2;
      background: rgba(59, 73, 223, 0.1);
  }
`;
const CommentContent = styled.div`
  font-size: 18px;
  margin: 8px 0 16px;
  padding: 0 12px;
  line-height: 28px;
`;
export default CommentDetailData

// position: absolute;
// top: 100%;
// display: none;
// padding: 0.5rem;
// min-width: 250px;
// margin-top: 0.25rem;
// z-index: 400;
// background: #ffffff;
// color: #171717;
// 
// border-radius: 0.375rem;