import styled from "styled-components";

import Logo from '../Logo'
import OptionsHeader from '../OptionsHeader'
import IconsHeader from '../IconsHeader'
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  width: 100%;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo />
      </Link>
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  )
}