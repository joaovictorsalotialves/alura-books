import './styles.css'

import Profile from '../../images/perfil.svg'
import Bag from '../../images/sacola.svg'

const icons = [Profile, Bag];

export default function IconsHeader() {
  return(  
    <ul className='icons'>
      { icons.map((icons) => {
        return <li className='icon' key={icons}><img src={icons} alt='Icone'></img></li>
      })}
    </ul>
  )
}
