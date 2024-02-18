import styled from "styled-components";
import {Image} from "./index";
import star from '../assets/star.png'

const Wrapper = styled.div`
  background: black;
  border-radius: 32px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 420px;
  margin-bottom: 40px;
`

const Text = styled.span`
  font-size: 32px;
  color: white;
`

const Author = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
`

const Review = () => {
    return (
        <Wrapper>
            <div className='flex'>
                <Image src={star} />
                <Image src={star} />
                <Image src={star} />
                <Image src={star} />
                <Image src={star} />
            </div>
            <Text>I can’t recommend this podcast enough</Text>
            <Author>Betty Lacey</Author>
        </Wrapper>
    )
}

export default Review