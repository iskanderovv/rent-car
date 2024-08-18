import Cars from "../../components/cars/Cars";
import Header from "../../components/header/Header";
import { useGetCarsQuery } from "../../redux/api/car-api";

const Home = () => {
  const { data, isLoading } = useGetCarsQuery();
  return (
    <div>
      <Header />
      <Cars data={data?.payload} isLoading={isLoading} title={"Popular Cars"} />
    </div>
  );
};

export default Home;
