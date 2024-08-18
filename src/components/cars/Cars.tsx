import { Car } from "../../types/dataTypes";
import Card from "../card/Card";
import { Loading } from "../../utils";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  data: Car[] | undefined;
  isLoading: boolean;
};

const Cars = ({ data, title, isLoading }: Props) => {
  return (
    <div className="container">
      <div className="flex justify-between my-5">
        <div className="text-dark-gray text-xl font-semibold">{title}</div>
        <Link to="/products" className="text-primary text-xl font-medium">View all</Link>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data?.map((car) => (
            <Card key={car._id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
