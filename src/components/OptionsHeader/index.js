import './styles.css';

const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

export default function OptionsHeader() {
  return (
    <ul className='options'>
      { options.map((option) => {
        return <li className='option' key={option}><p>{option}</p></li>
      })}
    </ul>
  )
}
