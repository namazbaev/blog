import axios from 'axios';
import moment from 'moment';
import { LinkView } from '../AllStyle'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
    HeadWrapper, Title, AddButton, BlogItemWrapper, BlogItem, BlogItemTitle, BlogItemHead,
    BlogItemDate, BlogItemTag, Drop, Description, BlogBottom
} from './Blog.style';
import { Pagination } from '..';
const Blog = () => {
    const [articles, setArticles] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const getArticles = (size) => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/article?pageNumber=${size || 1}`).then((res) => {
            setArticles(res.data.result)
        })
    }
    useEffect(() => {
        getArticles()
        return () => setArticles({})
    }, []);
    const onChangePage = (page) => {
        setCurrentPage(page)
    }
    const { count, pageSize } = Object.entries(articles).length && articles?.pagination
    return (
        <>
            <HeadWrapper>
                <Title>Blog</Title>
                <Link to='/add/article'><AddButton>add Blog</AddButton></Link>
            </HeadWrapper>
            <BlogItemWrapper>
                {Object.entries(articles).length ? articles.list.map(({ name, _id, created_at, tags, description }) => {
                    return (
                        <BlogItem key={_id}>
                            <LinkView to={`/blog/${_id}`}><BlogItemTitle>{name}</BlogItemTitle></LinkView>
                            <BlogItemHead>
                                <BlogItemDate>{moment(created_at).format('ll')}</BlogItemDate>
                                <Drop />
                                <BlogItemTag>{tags.map(item => item.title).join(', ')}</BlogItemTag>
                            </BlogItemHead>
                            <Description>{description}</Description>
                            <BlogBottom />
                        </BlogItem>
                    )
                }) : 'Oopss!'}
            </BlogItemWrapper>
            <Pagination count={count} pageSize={pageSize} onChangePage={onChangePage} getArticles={getArticles} currentPage={currentPage} />
        </>);
};

export default Blog;
