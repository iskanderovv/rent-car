import { Card } from 'antd';
import { Car } from '../../types/dataTypes';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const CardComponent = ({car} : {car: Car}) => {
  return (
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<Link to={`single-car/${car._id}`}><img style={{width: 200}} alt={car.description} src={car.thumbnail} /></Link>}
  >
    <Meta title={car.name} description={parse(car.description)} />
  </Card>
  )
}

export default CardComponent