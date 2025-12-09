import './styles.css'

import Logo from '../Logo'
import OptionsHeader from '../OptionsHeader'
import IconsHeader from '../IconsHeader'

export default function Header() {
  return (
    <header className='App-header'>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  )
}