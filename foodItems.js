import burger from "./assets/Burger.jpg";
import pizza from "./assets/Pizza.jpg";
import shawarma from "./assets/Shawarma.jpg";
import burger2 from "./assets/Beef.jpg";
import pizza2 from "./assets/Pizza2.jpg";
import shawarma2 from "./assets/BShawarma.jpg";

const foodItems = [
  {
    id: 1,
    title: "Zinger Burger",
    image: burger,
    description: "Juicy crispy chicken burger with cheese.",
    price: "$8",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Beef Burger",
    image: burger2,
    description: "Double beef patty with fresh vegetables.",
    price: "$10",
    rating: 4.2,
  },
  {
    id: 3,
    title: "Pepperoni Pizza",
    image: pizza2,
    description: "Loaded with pepperoni and mozzarella cheese.",
    price: "$15",
    rating: 4.8,
  },
  {
    id: 4,
    title: "Chicken Pizza",
    image: pizza,
    description: "Grilled chicken with extra cheese.",
    price: "$14",
    rating: 4.3,
  },
  {
    id: 5,
    title: "Chicken Shawarma",
    image: shawarma,
    description: "Soft pita bread filled with grilled chicken.",
    price: "$7",
    rating: 4.1,
  },
  {
    id: 6,
    title: "Beef Shawarma",
    image: shawarma2,
    description: "Tender beef wrapped with garlic sauce.",
    price: "$8",
    rating: 4.7,
  },
];

export default foodItems;