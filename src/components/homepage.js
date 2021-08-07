import React from "react";
import styled from "styled-components";

import TwitterPic from "../assests/twitterPic.png"
import FarmingIcon from "../assests/FarmsIcon.png";
import AnnouncementsIcon from "../assests/AnnouncementsIcon.png";
import StatsIcon from "../assests/StatsIcon.png";
import TVLimage from "../assests/tvlImage.png";

import TopTitle from "../assests/TopTitle.png";

const Conatiner = styled.div`
    margin-left: 21%;

    h2 {
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 900;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
    }

`

const FarmBox = styled.div`
    background-color: #242249;

    display: inline-block;
    border-radius: 15px;
    padding-top: 15px;

    padding-left: 50px;
    padding-bottom: 5px;
    
    width: 470px;
    height: 380px;

    margin-left: 8%;
    margin-top: 3%;

    h4 {
        color: #6D6CAC;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
    }

    p {
        color: #C5C5DF;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0px;
        text-align: left;
    }

`

const UnlockButton = styled.div`
    width: 365px;
    height: 55px;
    left: 40px;
    top: 286px;

    background: linear-gradient(87.95deg, #6025F5 -30.37%, #FF5555 98.24%);
    box-shadow: 0px 5px 12px 1px rgba(255, 85, 218, 0.37);
    border-radius: 47px;

    p {
        padding-top: 17px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }
`

const AnnouncementsBox = styled.div`
    background-color: #242249;
    border-radius: 15px;

    padding-left: 20px;
    padding-bottom: 20px;

    width: 500px;
    height: 380px;

    margin-left: 50%;
    margin-top: -420px;
`

const StatsBox = styled.div`
    background-color: #242249;
    display: inline-block;

    margin-top: 1%;
    margin-left: 8%;
    border-radius: 15px;

    padding: 10px;

    width: 500px;
    height:  269px;

    ul {
        list-style-type: none;
    }

    li {
        padding-top: 1px;
        padding-bottom: 1px;

        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
        color: #C5C5DF;
    }

`

const TvlBox = styled.div`
    background: url(${TVLimage});

    background-size: 490px 290px;

    border-radius: 15px;
    padding: 50px;

    margin-top: -300px;
    margin-left: 50%;
    
    height: 195px;
    width: 425px;

    color: white;
`

const WelcomeText = styled.div`
    text-align:center;
    color: white;
    margin-top: -285px;

    img {
        margin-top: -27px; 
    }

    h2 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 900;
        font-size: 28px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }

    h4 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 10px;
    }
`


export default function Home() {

    return(
        <>
            <WelcomeText>
                <h2>WELCOME TO</h2>
                <img src={TopTitle} alt="" />
                <h4>The #1 AMM and yield farm on Binance Smart Chain.</h4>
            </WelcomeText>

            <Conatiner>
                <FarmBox>
                    <h2>Farms and Staking</h2>
                        <img Style="margin-left: 410px; margin-top: -60px;" src={FarmingIcon} alt='' />
                    <p>Moon to harvest</p>
                    <h4>LOCKED</h4>
                    <p>~$0.00</p>
                    <h4>LOCKED</h4>
                    <p>~$0.00</p>
                    <UnlockButton>
                        <p> Unlock Wallet </p>
                    </UnlockButton>
                </FarmBox>
                <AnnouncementsBox>
                    <h2 Style="padding-top: 30px; 
                                padding-left: 30px; 
                                padding-bottom: 10px;"> Announcements</h2>
                        <img  Style="margin-left: 400px; margin-top: -100px;" src={AnnouncementsIcon} alt='' />
                    <img src={TwitterPic} alt="" />
                </AnnouncementsBox>
                <br />
                <StatsBox>
                    <h2 Style="margin-left: 36px;">Freemoon Stats</h2>
                        <img  Style="margin-left: 410px; margin-top: -60px;" src={StatsIcon} alt="" />
                    <ul Style="margin-top: -10px;"> 
                        <li>Market Cap</li>
                        <li>Total Minted</li>
                        <li>Total Burned</li>
                        <li>Circulating Supply</li>
                        <li>New Cancer/block</li>
                    </ul>

                    <ul Style="margin-top: -180px; margin-left: 230px;">
                        <li>$19,339</li>
                        <li>645</li>
                        <li>41</li>
                        <li>604</li>
                        <li>0.05</li>
                    </ul>
                </StatsBox>
                <TvlBox>
                    <h3> Total Value Locked (TVL)</h3>
                    <h1>$712,293.64</h1>
                    <p>Acrosss all Farms and Pools</p>
                </TvlBox>
            </Conatiner>
        </>
    )
}