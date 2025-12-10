import styled from 'styled-components';

const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #FFF;
  color: ${props => props.textColor || '#000'};
  font-size: ${props => props.fontSize || '16px'};
  text-align: ${props => props.textAling || 'center'};
  margin: 0;
`

export default Title
