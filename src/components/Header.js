import { HeaderStyles } from "../App.styled"

export const Header = ({ platform }) => {
  return (
    <HeaderStyles>
      <h2>{platform}</h2>
      <p>at Oxford Circus Underground Station</p>
    </HeaderStyles>
  )
}
