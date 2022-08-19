import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-top: 4%;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  background-color: #fff;
  border: 1px solid #e7eaf3;
  border-radius: 0.5rem;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  align-items: center;
  text-align: center;
  background-color: rgb(245, 201, 21);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  @media (max-width: 500px) {
    overflow-y: scroll;
    max-height: 500px;
  }
`
