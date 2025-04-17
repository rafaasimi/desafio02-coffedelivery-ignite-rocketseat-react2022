import { MapPinLine } from "phosphor-react";
import { AddressForm, CartContainer, CartForm, CartItems } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <CartForm>
        <h2>Complete o seu pedido</h2>

        <AddressForm>
          <header className="">
            <MapPinLine size={22}/>
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="content">
            <input type="text" id="cep" placeholder="CEP"/>
            <input type="text" id="street" placeholder="Rua"/>
            <input type="text" id="number" placeholder="Número"/>
            <input type="text" id="complement" placeholder="Complemento"/>
            <input type="text" id="neighborhood" placeholder="Bairro"/>
            <input type="text" id="city" placeholder="Cidade"/>
            <input type="text" id="state" placeholder="UF"/>
          </div>
        </AddressForm>

        <div className="payment">

        </div>
      </CartForm>

      <CartItems>
        <h2>Cafés selecionados</h2>
      </CartItems>
    </CartContainer>
  );
}
