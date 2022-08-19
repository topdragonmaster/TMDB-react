import styled from 'styled-components'

interface PropInterface {
  id: number
  name: string
  active: boolean
  handClick: (id: number) => void
}

interface ItemInterface {
  active: boolean
}

const ActorItem = styled.li<ItemInterface>`
  background-color: #fae042;
  color: #white;
  font-size: 20px;
  cursor: pointer;
  font-weight: 100;
  height: 29px;
  color: ${(props: ItemInterface) => (props.active ? 'white' : 'black')};
  &: hover {
    color: white;
    font-weight: bold;
  }
`

export const SuggestItem: React.FC<PropInterface> = ({
  id,
  name,
  active,
  handClick,
}: PropInterface): JSX.Element => {
  const handleItemClick = () => {
    handClick(id)
  }
  return (
    <ActorItem onClick={handleItemClick} active={active}>
      {' '}
      {name}{' '}
    </ActorItem>
  )
}
