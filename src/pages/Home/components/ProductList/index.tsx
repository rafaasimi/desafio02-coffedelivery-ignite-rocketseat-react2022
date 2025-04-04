import { useEffect, useState } from "react";
import { Coffe, getCoffees } from "../../../../assets/coffees";
import { ProductListContainer, ProductListItems } from "./styles";
import { ProductItem } from "../ProductItem";

export function ProductList() {
  const [coffeeList, setCoffeeList] = useState<Coffe[]>([]);

  useEffect(() => {
    setCoffeeList(getCoffees());
  }, []);

  return (
    <ProductListContainer>
      <h2>Nossos cafés</h2>
      <ProductListItems>
        {coffeeList &&
          coffeeList.map((coffee) => {
            return <ProductItem key={coffee.id} coffee={coffee} />;
          })}
      </ProductListItems>
    </ProductListContainer>
  );
}
