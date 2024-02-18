import styled from "styled-components";
import {FC} from "react";

const Wrapper = styled.div`
  background: #191919;
  border-radius: 6px;
  font-size: 18px;
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 4px 16px;
`

interface IProps {
    text: string;
}

const Tag:FC<IProps> = ({text}) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    )
}

export default Tag