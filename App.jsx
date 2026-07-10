import { useState } from "react";
import FoodCard from "./FoodCard";
import FilterButtons from "./FilterButtons";
import foodItems from "./foodItems";

function App() {
  const [items, setItems] = useState(foodItems);

  const filterByName = (name) => {
    if (name === "") {
      setItems(foodItems);
      return;
    }

    const filtered = foodItems.filter((item) =>
      item.title.toLowerCase().includes(name.toLowerCase())
    );

    setItems(filtered);
  };

  const filterByRating = (rating) => {
    if (rating === 0) {
      setItems(foodItems);
      return;
    }

    const filtered = foodItems.filter(
      (item) => item.rating >= rating
    );

    setItems(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <h1 className="text-4xl font-bold text-center py-6 text-red-500">
        Food Center Menu 
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 p-6">

        {/* Sidebar */}
        <div className="md:col-span-1">
          <FilterButtons
            filterByName={filterByName}
            filterByRating={filterByRating}
          />
        </div>

        {/* Food Items */}
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;