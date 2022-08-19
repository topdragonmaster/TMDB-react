import styled from 'styled-components'

export const Avatar = styled.img`
  border: none;
  outline: none;
  appearance: none;
  font-size: 20px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`
