import React, {useState} from 'react';
import styled from "styled-components";
import Web3 from "web3";

import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

import Title from "../assests/Logov2.png";
import TopTitle from "../assests/TopTitle.png";
import BackgroundImage from "../assests/bgfarm.png";
import Astranaut from "../assests/astranaut.png";

import Twitter from "../assests/twitter.png";
import Telegram from "../assests/telegram.png";
import LightAndDark from "../assests/light.png"

import Saturn from "../assests/saturn.png";
import Tractor from "../assests/tractor.png";
import Sprout from "../assests/sprout.png";
import Spaceship from "../assests/spaceship.png";
import Stats from "../assests/stats.png";
import Neptune from "../assests/neptune.png";

import Home from "../components/homepage";

const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '43b86485d3164682b5d703fd1d39fe1c' // required. Should move to .env file
      }
    }
}

const web3Modal = new Web3Modal({
    network: 'rinkeby', // optional
    cacheProvider: true, // optional
    providerOptions // required
});


const Container = styled.div`
height: 1200px;
background: url(${BackgroundImage});
background-repeat: no-repeat;

`
const AstranautContainer = styled.div`

width: 203.85px;
height: 213.94px;
margin-left: 80%;
margin-top: 3%;

transform: rotate(10.16deg);
img {
    z-index: 0;
}
`

const SideBarContainer = styled.div`
background-color: #242249;
float: left;
height: 100%;
width: 21%;

img {
    margin-top: 10px;
    padding-right: 10px;
}

ul {
    list-style-type: none;
    margin-top: 50px;
}

li {
    font-family: Roboto;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #6F6C99;

    padding-top: 0px;
    padding-bottom: 20px;
    margin-right: 0px;

    line-height: 2;

    :hover {
        cursor: pointer;
        color:#E14CAE;
    }
}
`

const RedCircle = styled.div`
position: absolute;

top: 169px;
width: 12px;
height: 12px;
border-radius: 100px;

background: linear-gradient(156.8deg, #FF4062 0%, #E14CAE 96.67%);
box-shadow: 0px 0px 17px 4px #E01066;
`

const ConnectButton = styled.div`
posistion: absolute;

top: 30px;
left: 80%;

margin-left: 85%;

height: 45px;
width: 157px;

border-radius: 45px;

background: linear-gradient(87.95deg, #6025F5 -30.37%, #FF5555 98.24%);
box-shadow: 0px 5px 12px 1px rgba(255, 85, 218, 0.37);

text-align: center;

p {
    color: white;
    padding-top: 15px;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
}
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

export default function HomePage() {

    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
  
    async function ConnectWeb3Wallet () {
        const provider = await web3Modal.connect();
        const web3 = await new Web3(provider);

        const accounts = await web3.eth.getAccounts();
        const address = { account: accounts[0] }.account;

        setWalletAddress(address)
        setWalletConnected(true);
  
        if (address) {
          web3.eth.getBalance(address, function (error, wei) {
            if (!error) {
              var balance = web3.utils.fromWei(wei, "ether");
              console.log(balance.substring(0, 4));
            }
          });
        }
    }

    return (
        <>
        <RedCircle /> 
        <Container>
    
        <SideBarContainer>
            <div Style="padding-top: 40px;
                        padding-left: 30px;
                        padding-bottom: 10px;">
                <img src={Title} alt="" />
            </div>

            <ul>
                <li Style="color:#E14CAE;"> <img src={Saturn} alt="" /> Home</li>
                <li> <img src={Tractor} alt="" /> Trade</li>
                <li> <img src={Sprout} alt="" />Farms</li>
                <li> <img src={Spaceship} alt="" />Pools</li>
                <li> <img src={Stats} alt="" />Info and statistics</li>
                <li> <img src={Neptune} alt="" /> More</li>
            </ul>

            <div Style="margin-top: 50px;
                        margin-left: 40px;">
                <img src={Twitter} alt='' />
                <img src={Telegram} alt='' />
                <br /> <br />
                <img src={LightAndDark} alt='' />
            </div>
        
        </SideBarContainer>

        <div Style="padding-top: 20px;">
            <ConnectButton onClick={() => ConnectWeb3Wallet()}>
                {!walletConnected && <p> CONNECT </p>}
                {walletConnected && <p> {walletAddress.substring(0, 6)} ... {walletAddress.substring(36, 42)}</p>}
            </ConnectButton>
        </div>

        <AstranautContainer>
                <img src={Astranaut} alt="" height="170px;" />
        </AstranautContainer>

        <WelcomeText>
            <h2>WELCOME TO</h2>
            <img src={TopTitle} alt="" />
            <h4>The #1 AMM and yield farm on Binance Smart Chain.</h4>
        </WelcomeText>

        <Home />
        
        </Container>
        </>
    )
}