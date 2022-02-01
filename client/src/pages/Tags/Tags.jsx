import http from '../../services/http';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Title, Label, Input, Slug, SubmitButton, List, ListItemText, ListItemLink, ListItem } from './Tags.style'
const Tags = () => {
    const initialData = { title: '', slug: '' }
    const [tagList, setTagList] = useState([]);
    const [details, setDetails] = useState(initialData);
    const isLogged = useSelector(state => state.user.isLogged);
    const getTagList = () => {
        http.get(`/tags`).then((res) => {
            setTagList(res.data)
        })
    }

    useEffect(() => {
        getTagList()
        return () => setTagList([]);
    }, []);

    const deleteTag = id => {
        http.delete(`/tags/${id}`).then((res) => {
            if (res.data.success) {
                getTagList()
            }
        })
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setDetails(prev => {
            return { ...prev, [name]: value }
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        const { title, slug } = details
        if (title.trim()) {
            const newObj = { title, slug }
            http.post(`/tags`, newObj).then((res) => {
                if (res.data.success) {
                    getTagList()
                    setDetails(initialData)
                }
            })
        }
    }
    return (
        <>
            <Title>add tag</Title>
            <form onSubmit={submitHandler}>
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input placeholder='Title' type="text" required={true} autoComplete='off' name='title' value={details.title} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="slug">Slug</Label>
                    <Input placeholder='Slug' type="text" required={true} autoComplete='off' name='slug' value={details.slug} onChange={handleChange} />
                </div>
                <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
            </form>
            <Title isSlug>Slug list</Title>
            <List>
                {tagList.length > 0 ? tagList.map(({ _id, title, slug }, i) =>
                    <ListItem key={i}>
                        <ListItemText>{i + 1 + '. '}{title}
                            <Slug>{slug}</Slug></ListItemText>
                        {isLogged && <ListItemLink onClick={() => deleteTag(_id)}><i className='fas fa-trash'></i></ListItemLink>}
                    </ListItem>
                ) : 'List empty!'}
            </List>
        </>);
};
export default Tags;
