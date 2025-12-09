import styled from "styled-components";

import Profile from '../../images/perfil.svg'
import Bag from '../../images/sacola.svg'

const icons = [Profile, Bag];

const Icons = styled.ul`
  display: flex;
  align-items: center;
`

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`

export default function IconsHeader() {
  return(  
    <Icons>
      { icons.map((icons) => {
        return <Icon key={icons}><img src={icons} alt='Icone'></img></Icon>
      })}
    </Icons>
  )
}
