import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { FeatureList, MainContainer, MainWrapper } from "./styles";
import { ProductList } from "./components/ProductList";

import coffeeHero from '../../assets/hero-coffee.png'

export function Home() {
  return (
    <>
      <MainWrapper>
        <MainContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <FeatureList>
              <li>
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </li>
              <li>
                <span>
                  <Package size={16} weight="fill" />
                </span>

                <p>Embalagem mantém o café intacto</p>
              </li>
              <li>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </li>
              <li>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                <p>O café chega fresquinho até você</p>
              </li>
            </FeatureList>
          </div>

          <div>
            <img src={coffeeHero} alt="" />
          </div>
        </MainContainer>
      </MainWrapper>
      
      <ProductList />
    </>
  );
}
