import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Coffe } from "../../../../assets/coffees";
import {
  ProductItemCategories,
  ProductItemContainer,
  ProductItemControls,
  ProductItemForm,
} from "./styles";

interface ProductItemProps {
  coffee: Coffe;
}

export function ProductItem({ coffee }: ProductItemProps) {
  return (
    <ProductItemContainer>
      <img src={coffee.image} alt={coffee.name} />
      <ProductItemCategories>
        {coffee.categories.map((category) => {
          return <span>{category}</span>;
        })}
      </ProductItemCategories>

      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>

      <ProductItemForm>
        <div>
          <span>R$</span>
          <strong>9,90</strong>
        </div>

        <ProductItemControls>
          <div>
            <button title="Decrementar produto">
              <Minus size={14} weight="bold"/>
            </button>
            <input type="number" name="" id="" placeholder="0" max={9} />
            <button title="Incrementar produto">
              <Plus size={14}  weight="bold"/>
            </button>
          </div>

          <button title="Adicionar ao carrinho">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </ProductItemControls>
      </ProductItemForm>
    </ProductItemContainer>
  );
}
