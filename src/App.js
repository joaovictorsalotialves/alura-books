import './App.css';
import Logo from './components/Logo'

import Profile from './images/perfil.svg'
import Bag from './images/sacola.svg'

const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icons = [Profile, Bag];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo />
        <ul className='options'>
          { options.map((option) => {
            return <li className='option' key={option}><p>{option}</p></li>
          })}
        </ul>

        <ul className='icons'>
          { icons.map((icons) => {
            return <li className='icon' key={icons}><img src={icons} alt='Icone'></img></li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
