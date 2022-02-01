import { useParams } from 'react-router-dom';
// import imgs from '../../../public/images/page_not_found_re_e9o6.svg'
const NotFound = () => {
    const { pageName } = useParams()
    return <div>{pageName} not found!
        {/* <img src={imgs} alt="" /> */}
    </div>;
};
export default NotFound;
