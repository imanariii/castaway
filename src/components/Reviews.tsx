import styled from "styled-components";
import {Review} from "./index";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 140px;
  gap: 20px;
  justify-content: space-between;
`

const Reviews = () => {
    return (
        <Wrapper className='container'>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
        </Wrapper>
    )
}

export default Reviews