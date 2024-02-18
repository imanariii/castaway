import {FC} from "react";
import styled from "styled-components";

interface IProps {
    text: string
}

const Wrapper = styled.input`
  background: #191919;
  color: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  border: 1px solid #191919;
  font-size: 24px;
  padding: 24px;
  width: 100%;
  &:active {
    outline:#118DA8 1px solid;
  },
  &:hover {
    outline:#118DA8 1px solid;
  },
  &:focus {
    outline:#118DA8 1px solid;
  }
`

const Input:FC<IProps> = ({text}) => {
    return (
        <Wrapper placeholder={text}>

        </Wrapper>
    )
}

export default Input;