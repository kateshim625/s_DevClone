import React from 'react';
import PostMain from './postMain/PostMain';
import NavMain from "./navMain/NavMain";
import AsideMain from "../components/rightSide/AsideMain";

import styled from "styled-components";

const Navigator = ({ comms, setComms}) => {
    // console.log("setComms_Navigator: ", setComms)

    return (
        <>
            <MainStyle>
                <div>
                    <NavMain />
                </div> 
                {/* // <!-- left end--> */}     
                <div>
                    <PostMain comm={comms} setComms={setComms} />
                </div>
                {/* // <!-- Main end--> */}     
                <div>
                    <AsideMain />
                </div>
                {/* // <!-- Right end--> */}     
            </MainStyle>
        </>
    )
}

const MainStyle = styled.div`
    display: flex;
`;
export default Navigator;
