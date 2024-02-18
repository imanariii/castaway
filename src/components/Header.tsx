import styled from "styled-components";
import CustomLink from "./CustomLink";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  color: white;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

const Header = () => {
    return (
        <Wrapper className="container">
            <Logo>
                Castaway
            </Logo>
            <Nav>
                <CustomLink src={'../#home'} text={'Home'} />
                <CustomLink src={'../#episodes'} text={'Episodes'} />
                <CustomLink src={'../#about'} text={'About'} />
                <CustomLink src={'../#contact'} text={'Contact'} />
                <CustomLink src={'../admin-panel'} text={'AdminPanel'} />
            </Nav>
        </Wrapper>
    )
}

export default Header