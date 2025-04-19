import { Minus, Plus, Trash } from "phosphor-react";
import {
  CartItem,
  CartItemTotal,
  CartListContainer,
  CartListWrapper,
  Divider,
  ProductItemControls,
} from "./styles";

export function CartList() {
  return (
    <CartListContainer>
      <h2>Cafés selecionados</h2>

      <CartListWrapper>
        <CartItem>
          <div className="product-image">
            <img src="src/assets/coffees/expresso-tradicional.png" alt="" />
          </div>

          <div className="product-info">
            <h3>Expresso Tradicional</h3>

            <div>
              <ProductItemControls>
                <div>
                  <button title="Decrementar produto">
                    <Minus size={14} weight="bold" />
                  </button>
                  <input type="number" name="" id="" placeholder="0" max={9} />
                  <button title="Incrementar produto">
                    <Plus size={14} weight="bold" />
                  </button>
                </div>

                <button title="Remover produto">
                  <Trash size={16} weight="fill" />
                  <span>Remover</span>
                </button>
              </ProductItemControls>
            </div>
          </div>
        </CartItem>

        <Divider />

        <CartItem>
          <div className="product-image">
            <img src="src/assets/coffees/arabe.png" alt="" />
          </div>

          <div className="product-info">
            <h3>Arabe</h3>

            <div>
              <ProductItemControls>
                <div>
                  <button title="Decrementar produto">
                    <Minus size={14} weight="bold" />
                  </button>
                  <input type="number" name="" id="" placeholder="0" max={9} />
                  <button title="Incrementar produto">
                    <Plus size={14} weight="bold" />
                  </button>
                </div>

                <button title="Remover produto">
                  <Trash size={16} weight="fill" />
                  <span>Remover</span>
                </button>
              </ProductItemControls>
            </div>
          </div>
        </CartItem>

        <Divider />

        <CartItemTotal>
          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>
                <strong>Total</strong>
              </span>
              <span>
                <strong>R$ 33,20</strong>
              </span>
            </div>
          </div>

          <button type="button">Confirmar pedido</button>
        </CartItemTotal>
      </CartListWrapper>
    </CartListContainer>
  );
}
