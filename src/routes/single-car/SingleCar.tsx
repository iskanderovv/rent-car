import parse from "html-react-parser";
import { FaHeart, FaStar } from "react-icons/fa";
import { useGetSingleCarQuery } from "../../redux/api/car-api";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { Car } from "../../types/dataTypes";

const SingleCar = () => {
  const { id } = useParams();
  const idParam = id !== undefined ? id : "";
  const { data, isLoading } = useGetSingleCarQuery(idParam);

  const car: Car | undefined = data?.payload ? data.payload : undefined;

  console.log(car);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!car) {
    return (
      <div className="flex justify-center items-center h-screen">
        Car not found
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container my-8">
        <div>
          <div className="flex">
            <div className="w-1/2">
              <img
                className="rounded-lg w-full"
                src={car.images[0]}
                alt={car.model}
              />
              <div className="flex justify-center mt-4 space-x-2">
                {car.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    className="w-24 h-24 object-cover rounded-lg border border-gray-300"
                    src={image}
                    alt={`Car interior ${index}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-1/2 pl-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{`${car.name} ${car.model}`}</h1>
                <FaHeart className="text-red-500 cursor-pointer" />
              </div>
              <div className="flex items-center mt-2">
                <div className="text-yellow-500 flex gap-1 mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">440+ Reviewer</span>
              </div>
              <div className="text-dark-gray mt-4">
                {parse(car.description)}
              </div>
              <div className="flex flex-wrap mt-4 space-y-2">
                <p className="w-1/2">
                  <strong>Type:</strong> {car.model}
                </p>
                <p className="w-1/2">
                  <strong>Capacity:</strong> {car.seats} Person
                </p>
                <p className="w-1/2">
                  <strong>Steering:</strong> Manual
                </p>
                <p className="w-1/2">
                  <strong>Gasoline:</strong> {car.fuel}
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h4 className="text-black text-3xl">
                    ${car.rent_price}/
                    <span className="text-dark-gray text-xl">day</span>
                  </h4>
                  <p className="text-dark-gray">${car.price}</p>
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
