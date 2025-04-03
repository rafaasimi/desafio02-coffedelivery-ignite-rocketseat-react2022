import { MapPin, ShoppingCart } from "phosphor-react";
import logoCoffeDelivery from "../../assets/logo-coffe-delivery.svg";
import { HeaderContainer, IconsContainer } from "./styles";
import { Link } from "react-router";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeDelivery} alt="" />
      </Link>

      <IconsContainer>
        <span>
          <MapPin size={22} weight="fill" /> Araras, SP
        </span>

        <Link to="/cart">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Link>
      </IconsContainer>
    </HeaderContainer>
  );
}
