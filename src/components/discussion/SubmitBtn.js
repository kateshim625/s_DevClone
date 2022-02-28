import React from 'react'
import styled from 'styled-components'

const SubmitBtn = () => {
  return (
    <SubmitButton>Submit</SubmitButton>
  )
}
const SubmitButton = styled.button`
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
export default SubmitBtn