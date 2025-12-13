import { Link } from "react-router-dom";
import styled from "styled-components";

const options =  [
  { name: 'CATEGORIAS', path: '/categories' },
  { name: 'MINHA ESTANTE', path: '/shelf' },
  { name: 'FAVORITOS', path: '/favorite' }
]

const Options = styled.ul`
  display: flex;
`

const Option = styled.ul`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

export default function OptionsHeader() {
  return (
    <Options>
      { options.map((option) => {
        return (
          <Link to={option.path}>
            <Option key={option.name}><p>{option.name}</p></Option>
          </Link>
        )
      })}
    </Options>
  )
}
