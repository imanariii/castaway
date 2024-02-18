import styled from "styled-components";
import {Button, Image} from './index';
import VectorImg from '../assets/vector_line1.png'
import Input from "./Input";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Form = styled.div`
  display: flex;
  justify-content: space-between;
  background: black;
  width: 100%;
  border-radius: 32px;
  padding: 60px;
`

const Title = styled.span`
  color: white;
  font-size: 64px;
  letter-spacing: 3px;
  line-height: 70px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
`
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px;
`
const SubTitle = styled.span`
  color: #118DA8;
  font-size: 18px;
  margin-bottom: 20px;
`

const Contact = () => {
    return (
        <>
            <Image src={VectorImg} width={70} height={75} style={{
                position: 'relative',
                top: '390px',
                left: '70px',
                rotate: '270deg',
            }} />
            <Wrapper className='container'>
                <Form>
                    <Info>
                        <SubTitle>Email Newsletter</SubTitle>
                        <Title>Subscribe for updates</Title>
                    </Info>
                    <Inputs>
                        <Input text={'Name'}></Input>
                        <Input text={'Email'}></Input>
                        <Button text={'Submit'}></Button>
                    </Inputs>
                </Form>

            </Wrapper>
        </>
    )
}

export default Contact