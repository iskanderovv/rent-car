import { GiPegasus } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFuelPumpFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Car } from "../../types/dataTypes";
import { Link } from "react-router-dom";
import { Button } from "antd";

const CardComponent = ({ car }: { car: Car }) => {

  return (
    <div className="bg-white rounded-lg p-[26px]">
      <div className="flex justify-between">
        <div>
          <h4 className="font-medium text-xl">{car.model}</h4>
          <p className="text-dark-gray font-medium">{car.name}</p>
        </div>
        <AiOutlineHeart className="text-xl cursor-pointer" />
      </div>
      <Link to={`/single-car/${car._id}`}>
        <img
          className="w-[348px] h-[200px] object-contain"
          src={car.images[0]}
          alt={car.name}
        />
      </Link>
      <div className="flex gap-4 items-center text-dark-gray">
        {[
          [<BsFuelPumpFill />, car.capacity_fuel + "L"],
          [<GiPegasus />, "Manual"],
          [<BsFillPeopleFill />, car.seats + "People"],
        ].map((item, index) => {
          const [icon, text] = item;
          return (
            <div className="flex items-center gap-x-2" key={index}>
              {icon}
              <p className="text-dark-gray">{text}</p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between mt-5">
        <div>
          <h4 className="text-black">
            ${car.rent_price}/<span className="text-dark-gray">day</span>
          </h4>
          <p className="text-dark-gray">${car.price}</p>
        </div>
        <Link to={`/single-car/${car._id}`}>
          <Button type="primary">Rent Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
