import styled from "styled-components";
import {Button, Episode} from "./index";


const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  color: white;
  font-size: 64px;
`

const ListEpisodes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-top: 74px;
`

const Episodes = () => {
    return (
        <section id='episodes'>
            <TitleWrapper className='container'>
                <Title>Latest episodes</Title>
                <Button text="View all episodes" />
            </TitleWrapper>
            <ListEpisodes className='container'>
                <Episode />
                <Episode />
                <Episode />
            </ListEpisodes>
        </section>
    )
}

export default Episodes