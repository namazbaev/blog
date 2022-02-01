import moment from 'moment';
import http from '../../services/http';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ARTICLE } from '../../utils/routes';
import {
  BlogItemWrapper, BlogItem, BlogItemTitle, BlogItemHead,
  BlogItemDate, BlogItemTag, Drop, Description, BlogBottom
} from './Blog.style';
const BlogView = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);
  const getByArticle = id => {
    http.get(`${ARTICLE}/${id}`).then((res) => {
      setCurrent(res.data.result)
    }).finally(() => {
      setLoading(false)
    }).catch(() => {
      setLoading(false)
    })
  }
  useEffect(() => {
    if (id) {
      setLoading(true)
      getByArticle(id)
    }
  }, [id]);

  return (<>
    {loading && <div>loading...</div>}
    {current &&
      <BlogItemWrapper>
        <BlogItem key={current._id}>
          <BlogItemTitle>{current.name}</BlogItemTitle>
          <BlogItemHead>
            <BlogItemDate>{moment(current.created_at).format('ll')}</BlogItemDate>
            <Drop />
            <BlogItemTag>{current?.tags?.map(item => item.title).join(', ')}</BlogItemTag>
          </BlogItemHead>
          <Description>{current.description}</Description>
          <BlogBottom />
        </BlogItem>
      </BlogItemWrapper>}
  </>);
};
export default BlogView;