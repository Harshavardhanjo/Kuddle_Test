import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 7vh;
    background-color: #ff9900;
    `;

export const NavBarLogo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    font-size: 2em;
    color: white;
    `;

export const NavBarItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    font-size: 1.5em;
    `;

export const NavBarItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1em;
    margin : 10px;

    &:hover {
        border-bottom: 2px solid black;
    }
    `;