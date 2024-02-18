import styled from "styled-components";
import imgEpisode1 from "../assets/episode1.png"

import {Button, Image, Tag} from './index'
const Wrapper = styled.div`
  display: flex;
  background: black;
  border-radius: 32px;
  gap: 60px;
  padding: 48px;
  width: 100%;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 980px;
`

const IdEpisode = styled.span`
  color: #118DA8;
  font-size: 18px;
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
`

const Episode = () => {
    return (
        <Wrapper>
            <Image src={imgEpisode1} />
            <Info>
                <Tag text='Gear' />
                <IdEpisode>
                    Episode 1
                </IdEpisode>
                <Title>
                    Should you get outboard audio gear?
                </Title>
                <Description>
                    Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.
                </Description>
                <Button text="View all episodes" />
            </Info>
        </Wrapper>
    )
}

export default Episode