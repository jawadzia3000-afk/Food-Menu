const FoodCard = ({ item }) => {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">
  
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-52 object-cover"
        />
  
        <div className="p-4">
  
          <h2 className="text-xl font-bold">{item.title}</h2>
  
          <p className="text-yellow-500 font-semibold">
            ⭐ {item.rating}
          </p>
  
          <p className="text-gray-600 my-2">
            {item.description}
          </p>
  
          <h3 className="text-red-500 font-bold text-lg">
            {item.price}
          </h3>
  
        </div>
  
      </div>
    );
  };
  
  export default FoodCard;