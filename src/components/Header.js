import { HeaderStyles } from "../App.styled"

export const Header = ({ platform }) => {
  return (
    <HeaderStyles>
      <h2>{platform}</h2>
      <p>at Great Portland Street Underground Station</p>
    </HeaderStyles>
  )
}
