export interface Coffe {
  id: string;
  name: string;
  description: string;
  categories: Coffeecategories[];
  price: number;
  image: string;
}

type Coffeecategories =
  | "tradicional"
  | "especial"
  | "com leite"
  | "gelado"
  | "alcoólico";

export function getCoffees(): Coffe[] {
  return [
    {
      id: "expresso-tradicional",
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      categories: ["tradicional"],
      price: 9.9,
      image: "/coffees/expresso-tradicional.png",
    },
    {
      id: "expresso-americano",
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      categories: ["tradicional"],
      price: 9.9,
      image: "/coffees/expresso-americano.png",
    },
    {
      id: "expresso-cremoso",
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      categories: ["tradicional"],
      price: 9.9,
      image: "/coffees/expresso-cremoso.png",
    },
    {
      id: "expresso-gelado",
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      categories: ["tradicional", "gelado"],
      price: 9.9,
      image: "/coffees/expresso-gelado.png",
    },
    {
      id: "cafe-com-leite",
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      categories: ["tradicional", "com leite"],
      price: 7.8,
      image: "/coffees/cafe-com-leite.png",
    },
    {
      id: "latte",
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      categories: ["tradicional", "com leite"],
      price: 8.8,
      image: "/coffees/latte.png",
    },
    {
      id: "capuccino",
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      categories: ["tradicional", "com leite"],
      price: 10.5,
      image: "/coffees/capuccino.png",
    },
    {
      id: "macchiato",
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      categories: ["tradicional", "com leite"],
      price: 10.5,
      image: "/coffees/macchiato.png",
    },
    {
      id: "mocaccino",
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      categories: ["tradicional", "com leite"],
      price: 10.8,
      image: "/coffees/mocaccino.png",
    },
    {
      id: "chocolate-quente",
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      categories: ["especial", "com leite"],
      price: 12.2,
      image: "/coffees/chocolate-quente.png",
    },
    {
      id: "cubano",
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      categories: ["especial", "alcoólico", "gelado"],
      price: 15,
      image: "/coffees/cubano.png",
    },
    {
      id: "havaiano",
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      categories: ["especial"],
      price: 14.2,
      image: "/coffees/havaiano.png",
    },
    {
      id: "arabe",
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      categories: ["especial"],
      price: 18.0,
      image: "/coffees/arabe.png",
    },
    {
      id: "irlandes",
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      categories: ["especial", "alcoólico"],
      price: 23.5,
      image: "/coffees/irlandes.png",
    },
  ];
}
