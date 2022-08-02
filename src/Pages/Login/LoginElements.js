import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #e5eef8;
    `;

export const LoginBox = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 470px;
    width: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    justify-items: center;
    `;

export const LoginTitleBox = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    `;

export const LoginTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    font-weight: bold;
    padding: 40px;
    `;

export const LoginInputBox = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    width: 80%;
    justify-items: center;
    // background-color: green;
    `;

export const LoginInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 40px;
    outline: none;
    border : none;
    background-color: #f1f5f9;
    line-height: 50px;
    font-size: 1.5rem;

    &::placeholder {
        color : #838484;
        font-size: 25px;
        padding-left: 10px;
        padding-top: 10px;
    }
    `;


export const LoginButtonBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    width: 80%;
    justify-items: center;
    // background-color: red;
    align-items: center;
    `;

export const LoginCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #0578ed;
    cursor: pointer;
    `;

export const LoginButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #ff9900;
    border-radius: 40px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 90%;
    height: 60px;
    border: none;
    color : #fff;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #ff9900;
        border: 1px solid #ff9900;
        transition: 0.3s ease-in-out;
    }
    `;