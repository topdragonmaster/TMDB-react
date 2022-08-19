import { useState } from 'react'
import styled from 'styled-components'
import { Avatar } from '../../../components'

interface PropInterface {
  id: number
  src: string
  handDeleteClick: (id: number) => void
}

type OverLayProps = {
  display: boolean
}

export const Container = styled.div`
  flex-direction: row;
  position: relative;
  width: 200px;
  height: 200px;
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
  }
`

export const OverLay = styled.div<OverLayProps>`
  display: flex;
  flex-direction: center;
  justify-content: center;
  position: absolute;
  align-items: center;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: ${(props: OverLayProps) => (props.display ? '100%' : '0px')};
  width: 100%;
  border-radius: 150px;
  opacity: 0.8;
  transition: 0.3s ease;
  background-color: grey;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  width: auto;
  font-size: 20px;
  height: 20%;
  width: 60%;
  &:hover {
    background: palevioletred;
    color: white;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`

export const AvatarItem: React.FC<PropInterface> = ({
  id,
  src,
  handDeleteClick,
}: PropInterface): JSX.Element => {
  const [overlayVisible, setOverlayVisible] = useState(false)

  const handleDeleteClick = () => {
    handDeleteClick(id)
  }

  return (
    <Container
      onMouseEnter={() => setOverlayVisible(true)}
      onMouseLeave={() => setOverlayVisible(false)}
    >
      <Avatar src={src} />
      <OverLay display={overlayVisible}>
        <DeleteButton onClick={handleDeleteClick}> DELETE</DeleteButton>
      </OverLay>
    </Container>
  )
}
