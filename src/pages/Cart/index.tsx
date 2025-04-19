import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  AddressForm,
  CartContainer,
  CartForm,
  PaymentForm,
  PaymentMethodItem,
  PaymentMethods,
} from "./styles";
import { CartList } from "../../components/CartList";

export function Cart() {
  return (
    <CartContainer>
      <CartForm>
        <h2>Complete o seu pedido</h2>

        <AddressForm>
          <header>
            <MapPinLine size={22} />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <div className="content">
            <input type="text" id="cep" placeholder="CEP" />
            <input type="text" id="street" placeholder="Rua" />
            <input type="text" id="number" placeholder="Número" />
            <input type="text" id="complement" placeholder="Complemento" />
            <input type="text" id="neighborhood" placeholder="Bairro" />
            <input type="text" id="city" placeholder="Cidade" />
            <input type="text" id="state" placeholder="UF" />
          </div>
        </AddressForm>

        <PaymentForm>
          <header>
            <CurrencyDollar size={22} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <PaymentMethods>
            <PaymentMethodItem>
              <input
                type="radio"
                id="credit-card"
                name="payment-method"
                value="credit-card"
              />
              <label htmlFor="credit-card">
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </label>
            </PaymentMethodItem>

            <PaymentMethodItem>
              <input
                type="radio"
                id="debit-card"
                name="payment-method"
                value="debit-card"
              />
              <label htmlFor="debit-card">
                <Bank size={16} />
                <span>Cartão de débito</span>
              </label>
            </PaymentMethodItem>

            <PaymentMethodItem>
              <input
                type="radio"
                id="money"
                name="payment-method"
                value="money"
              />
              <label htmlFor="money">
                <Money size={16} />
                <span>Dinheiro</span>
              </label>
            </PaymentMethodItem>
          </PaymentMethods>
        </PaymentForm>
      </CartForm>

      <CartList />
      

    </CartContainer>
  );
}
