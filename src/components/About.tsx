import styled from "styled-components";
import ArrowImg from '../assets/arrowAbout.png'
import AboutImg from '../assets/about.png'
import {Image} from "./index";

const Wrapper = styled.section`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  padding: 180px 0;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 590px;
`

const SubTitle = styled.span`
  color: #118DA8;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 30px;
`
const Title = styled.span`
  color: white;
  font-size: 64px;
  letter-spacing: 3px;
  line-height: 70px;
`

const Description = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 22px;
  line-height: 33px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const About = () => {
    return (
        <Wrapper className='container'>
            <Info>
                <Image width={112} height={112} src={ArrowImg} />
                <SubTitle>Meet your host</SubTitle>
                <Title>Jacob Paulaner</Title>
                <Description>Jacob has a background in audio engineering, and has been podcasting since the early days.</Description>
                <Description>He’s here to help you level up your game by sharing everything he’s learned along the way.</Description>
            </Info>
            <Image src={AboutImg} />
        </Wrapper>
    )
}

export default About