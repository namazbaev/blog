import _ from 'lodash';
import { PaginationList, PageItem } from './Pagination.style'
const Pagination = ({ count, pageSize, currentPage, onChangePage, getArticles }) => {
    const pageCount = count / pageSize;
    const pages = _.range(1, pageCount + 1);
    return (
        <PaginationList>
            {pages.map(item => <PageItem onClick={() => {
                onChangePage(item)
                getArticles(item)
            }} active={currentPage === item} key={item}>{item}</PageItem>)}
        </PaginationList>);
};
export default Pagination;
