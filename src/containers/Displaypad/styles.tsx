import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const AvatarContent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 200px;
  justify-content: center;
  flex-flow: wrap;
  padding: 0px 20px;
`

export const MoveList = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-bottom: 20px;

  p {
    margin: 2px;
  }
`

export const ActorContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  p {
    font-size: 20px;
    font-weight: bold;
    color: rgb(245, 201, 21);
  }
  width: 200px;
  @media (max-width: 500px) {
    width: 100px;
  }
`
