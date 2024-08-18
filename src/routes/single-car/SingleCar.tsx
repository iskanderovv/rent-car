import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../redux/api/car-api";
import parse from "html-react-parser";
import Header from "../../components/header/Header";

const SingleCar = () => {
  const { id } = useParams();
  const idParam = id !== undefined ? id : '';
  const { data } = useGetSingleCarQuery(idParam);
  console.log(data);

  const car = Array.isArray(data?.payload) ? data.payload[0] : data?.payload; // Access the first car if payload is an array

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="flex p-8 space-x-6 bg-white shadow-lg rounded-lg">
          <div className="w-2/5">
            <div className="mb-4">
              <h2 className="text-xl font-bold">{car?.name || "Sports car with the best design and acceleration"}</h2>
              <p className="text-gray-600">Safety and comfort while driving a futuristic and elegant sports car</p>
            </div>
            <div className="flex space-x-2">
              <div className="border-2 border-blue-500 p-1 rounded-lg">
                <img src={car?.image1 || "/images/car1.jpg"} alt="Car 1" className="w-full h-auto rounded-lg" />
              </div>
              <img src={car?.image2 || "/images/car2.jpg"} alt="Car 2" className="w-full h-auto rounded-lg" />
              <img src={car?.image3 || "/images/car3.jpg"} alt="Car 3" className="w-full h-auto rounded-lg" />
            </div>
          </div>

          <div className="w-3/5 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">{car?.model || "Nissan GT - R"}</h3>
              <div className="flex items-center mb-2">
                <div className="text-yellow-400 mr-2">⭐⭐⭐⭐⭐</div>
                <span className="text-gray-500 text-sm">{car?.reviews || "440+ Reviewer"}</span>
              </div>
              <p className="text-gray-700 mb-4">
                {car?.description || "NISMO has become the embodiment of Nissan’s outstanding performance, inspired by the most unforgiving proving ground, the “race track”."}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-gray-500">Type Car</div>
                <div>{car?.type || "Sport"}</div>
                <div className="text-gray-500">Capacity</div>
                <div>{car?.capacity || "2 Person"}</div>
                <div className="text-gray-500">Steering</div>
                <div>{car?.steering || "Manual"}</div>
                <div className="text-gray-500">Gasoline</div>
                <div>{car?.gasoline || "70L"}</div>
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">{`$${car?.price || "80.00"}/day`}</div>
              <div className="text-gray-400 line-through">{car?.discountPrice ? `$${car.discountPrice}` : "$100.00"}</div>
              <button className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-lg">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCar;
