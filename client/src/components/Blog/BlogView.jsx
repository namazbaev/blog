import axios from 'axios';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BlogItemWrapper, BlogItem, BlogItemTitle, BlogItemHead,
  BlogItemDate, BlogItemTag, Drop, Description, BlogBottom
} from './Blog.style';
const BlogView = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(false);
  const getByArticle = id => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/article/${id}`).then((res) => {
      setCurrent(res.data.data)
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