import styled from "styled-components";
import {FC} from "react";

const Wrapper = styled.div`
  background: #118DA8;
  color: white;
  border-radius: 6px;
  //padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  font-size: 18px;
  height: fit-content;
  width: fit-content;
`

interface IProps {
    text:string;
}

const Button:FC<IProps> = ({text}) => {
    return (
        <Wrapper>
            {text}
        </Wrapper>
    )
}
export default Button