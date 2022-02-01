import moment from 'moment';
import http from '../../services/http';
import { Footer } from '../../components/';
import { useState, useEffect } from 'react';
import { LinkView } from '../../components/AllStyle';
import { BLOG, ARTICLE } from '../../utils/routes';
import {
    HeadWrapper, BlogItemWrapper, BlogItem, BlogItemTitle, BlogItemHead,
    BlogItemDate, BlogItemTag, Drop, Description, BlogBottom
} from '../Blog/Blog.style';
const Home = () => {
    const [articles, setArticles] = useState([]);
    const getArticles = () => {
        http.get(ARTICLE).then((res) => {
            setArticles(res.data.result.list)
        })
    }
    useEffect(() => {
        getArticles()
        return () => setArticles([])
    }, []);
    return (
        <>
            <HeadWrapper>
            </HeadWrapper>
            <BlogItemWrapper>
                {articles.length ? articles.map(({ name, _id, created_at, tags, description }) => {
                    return (
                        <BlogItem key={_id}>
                            <LinkView to={`${BLOG}/${_id}`}><BlogItemTitle>{name}</BlogItemTitle></LinkView>
                            <BlogItemHead>
                                <BlogItemDate>{moment(created_at).format('ll')}</BlogItemDate>
                                <Drop />
                                <BlogItemTag>{tags.map(item => item.title).join(', ')}</BlogItemTag>
                            </BlogItemHead>
                            <Description>{description.substring(0, 300)}</Description>
                            <BlogBottom />
                        </BlogItem>
                    )
                }) : 'Oopss!'}
            </BlogItemWrapper>
            <Footer />
        </>
    );
};
export default Home;
