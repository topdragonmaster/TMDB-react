import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`
export const InputText = styled.input`
  background-color: rgb(235, 235, 235);
  border: none;
  outline: none;
  display: flex;
  appearance: none;
  margin: 5% 20%;
  width: auto;
  font-size: 20px;
  padding: 14px 30px;
  border-radius: 31px;
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 14px 10px;
  }
`

export const SuggestionContent = styled.ul`
  position: absolute;
  border: 1px solid #999;
  border-top-width: 0;
  list-style: none;
  margin-top: 0;
  max-height: 300px;
  overflow-y: auto;
  border: none;
  padding: 10px 0px;
  left: calc(50% - 150px);
  top: 90px;
  width: 300px;
  z-index: 1000;
  li:nth-child(odd) {
    background: rgb(245, 201, 21);
  }

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -5px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent rgb(245, 201, 21) transparent;
  }
`
