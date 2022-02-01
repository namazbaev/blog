import { useParams } from 'react-router-dom';

const NotFound = () => {
    const { pageName } = useParams()
    return <div>{pageName} not found!</div>;
};
export default NotFound;
