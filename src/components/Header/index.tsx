import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg";
import { HeaderContainer, IconsContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logoCoffeDelivery} alt="" />
      </a>

      <IconsContainer>
        <span>
          <MapPin size={22} weight="fill" /> Araras, SP
        </span>

        <a href="/">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </a>
      </IconsContainer>
    </HeaderContainer>
  );
}
