import styled from "styled-components";

const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

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
        return <Option key={option}><p>{option}</p></Option>
      })}
    </Options>
  )
}
