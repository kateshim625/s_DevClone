import React from 'react'
import styled from 'styled-components'
import EditFooter from './EditFooter';

const Delete = ({ comm, onDelete }) => {
  return (
    <div>
        <EditSec>
          <PostForEditContent>
            <p>{comm.text}</p>
          </PostForEditContent>
          <PostDeleteAlertContent>
            <div>
                <DeleteH1>Are you sure you want to delete this comment?</DeleteH1>
                <DeleteP>You cannot undo this action, perhaps you just want to <a hred="https://dev.to/">Edit</a> instead?</DeleteP>
            </div>
            <form>
              <div>
                  <DeleteBtn type="button" onClick={() => onDelete(comm.id)}>Delete</DeleteBtn>
                  <EditBtn href="https://dev.to/">Edit</EditBtn>
                  <DismissBtn href="https://dev.to/">Dismiss</DismissBtn>
              </div>
            </form>
          </PostDeleteAlertContent>
        </EditSec>
        <EditFooter />
      </div>
  );
};
const EditSec = styled.div`
  padding: 16px;
  margin: 0 147px;
`;
const PostDeleteAlertContent = styled.div`
  color: #171717;
  font-size: 16px;
  background: #ffffff;
  padding: 32px 64px;
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-radius: 0.375rem;
`;
const PostForEditContent = styled.div`
  color: #404040;
  font-size: 18px;
  background: #fafafa;
  margin: 12px 24px -4px;
  padding: 32px 64px;
  box-shadow: 0 0 0 1px rgba(23, 23, 23, 0.05);
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
`;
const DeleteH1 = styled.h1`
  color: #242424;
  font-size: 24px;
  margin: 0 0 8px;
`;
const DeleteP = styled.p`
  color: #171717;
  font-size: 18px;
  margin: 0 0 16px;
`;
const DeleteBtn = styled.button`
  color: #ffffff; 
  font-size: 18px;
  background: #dc2626;
  padding: 8px 16px;
  margin-right: 5px;
  border-radius: 0.375rem;
  &:hover {
    background: #b91c1c;
  }
`;
const EditBtn = styled.a`
  color: #3d3d3d;
  font-size: 16px;
  background: #d6d6d7;
  padding: 8px 16px;
  margin-right: 5px;
  border-radius: 0.375rem;
  &:hover {
    color: #090909;
    background: #bdbdbd;
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
export default Delete