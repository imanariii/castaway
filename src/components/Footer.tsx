import styled from "styled-components";
import Instagram from '../assets/instagam.png'
import Facebook from '../assets/facebook.png'
import Twiter from '../assets/twiter.png'
import {Image, CustomLink} from "./index";
import icon1 from "../assets/shopify.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon1.png";

const Wrapper = styled.footer`
  display: flex;
  background: black;
`
const Body = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 48px 0 140px 0;
`
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 46px;
  color: white;
`

const Footer = () => {
    return (
        <Wrapper>
            <Body className='container'>
                <div className='flex column gap'>
                    <Logo>Castaway</Logo>
                    <div className='flex gap-little'>
                        <Image src={Instagram} width={24} />
                        <Image src={Twiter} width={24} />
                        <Image src={Facebook} width={24} />
                    </div>
                </div>
                <div className='flex column gap'>
                    <CustomLink src={'#home'} text={'Home'} />
                    <CustomLink src={'#episodes'} text={'Episodes'} />
                    <CustomLink src={'#about'} text={'About'} />
                    <CustomLink src={'#contact'} text={'Contact'} />
                </div>
                <div className="flex row gap-little">
                    <Image src={icon1} width={32} height={32} />
                    <Image src={icon2} width={32} height={32} />
                    <Image src={icon3} width={32} height={32} />
                    <Image src={icon4} width={32} height={32} />
                    <Image src={icon5} width={32} height={32} />
                </div>
            </Body>
        </Wrapper>
    )
}

export default Footer