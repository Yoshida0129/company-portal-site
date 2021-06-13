import styled from "styled-components"
import Logo from "../atoms/Logo"

const Header = () => {
  const HeaderContainer = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #555;
  `
	return (
    <HeaderContainer>
      <Logo/>
      <h1>portal site</h1>
    </HeaderContainer>
  )
}

export default Header