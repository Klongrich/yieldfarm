import React from "react";
import styled from "styled-components";

import DownArrow from "../assests/downArrow.png";
import SettingIcon from "../assests/settings.png";
import RewindIcon from "../assests/rewind.png";
import SelectArrow from "../assests/SelectArrow.png";

const Container = styled.div`
    margin: 0;
    padding: 0;
`

const ExchangeWindow = styled.div`
    margin-left: 42%;
    margin-top: -150px;

    padding-left: 70px;
    padding-top: 5px;

    height: 498px;
    width: 515px;
    border-radius: 15px;
    background-color: #242249;

    h2 {
        font-family: Montserrat;
        font-size: 30px;
        font-style: normal;
        font-weight: 900;
        line-height: 37px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
        font-size: 37px;
    }

    h4 {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal; 
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        color: #C5C5DF;
        margin-top: -20px;

    }
`

const InputBox = styled.div`
    background-color: #2D2A57;
    border-radius: 10px;

    height: 70px;
    width: 370px;

    padding-left: 25px;;
    padding-right: 45px;

    padding-top: 0px;

    p {
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
        color: #C5C5DF;
    }

    h5 {
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0px;
        text-align: left;
        color: #6F6C99;

        padding-top: 13px;
    }

    img {
        float: right;
        margin-right: -20px;
        margin-top: -24px;
    }

`

const UnlockWallet = styled.div`
    margin-top: 40px;    

    width: 441px;
    height: 70px;

    background: linear-gradient(87.95deg, #6025F5 -30.37%, #FF5555 98.24%);
    box-shadow: 0px 5px 12px 1px rgba(255, 85, 218, 0.37);
    border-radius: 65px;

    p {
        font-family: Montserrat;
        font-size: 20px;
        font-style: normal;
        font-weight: 900;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center; 
        color: white;
        padding-top: 22px;
    }

`

const IconsBox = styled.div`
    text-align: right;
    margin-top: -63px;
    padding-bottom: 35px;
    margin-right: 87px;

    img {
        padding-left: 22px;
    }
`

export default function Exchange() {

    return (
        <>
            <Container>
                <ExchangeWindow>
                    <h2> Exchange </h2>
                    <h4>Trade tokens in an instant</h4>
                    
                    <IconsBox>
                        <img src={SettingIcon} alt="" />
                        <img src={RewindIcon} alt="" />
                    </IconsBox>

                    <div Style="border: 1px solid #36336B; width: 83%;" />
                    
                    <InputBox>
                        <h5>From</h5>
                        <p Style="margin-top: -13px;">0.0</p>
                        <p Style="text-align: right; margin-top: -30px;">Select Currency</p>
                        <img src={SelectArrow} alt='' />
                    </InputBox>
                    
                    <div Style="text-align: center; margin-right: 101px;">
                        <img Style="margin-top: 15px;" src={DownArrow} height="15" width="15" alt='' />
                    </div>

                    <InputBox>
                        <h5>From</h5>
                        <p Style="margin-top: -13px;">0.0</p>
                        <p Style="text-align: right; margin-top: -30px;">Select Currency</p>
                        <img src={SelectArrow} alt='' />
                    </InputBox>
              
                    <UnlockWallet>
                        <p>UNLOCK WALLET</p>
                    </UnlockWallet>
                </ExchangeWindow>
            </Container>
        </>
    )
}