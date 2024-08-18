import { useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../redux/api/car-api";

const SingleCar = () => {
  const { id } = useParams();
  const idParam = id !== undefined ? id : '';
  const { data, isLoading } = useGetSingleCarQuery(idParam);
  console.log(data);

  return <div>SingleCar</div>;
};

export default SingleCar;
