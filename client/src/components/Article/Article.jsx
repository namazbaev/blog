import axios from 'axios';
import { useState, useEffect } from 'react';
import { Title, Label, Input, TextArea, MultipleSelect, SubmitButton } from './Article.style';
const Article = () => {
    const initialData = { name: '', description: '', tag: [] }
    const [tagList, setTagList] = useState([]);
    const [details, setDetails] = useState(initialData);
    const getTagList = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/tags`).then((res) => {
            setTagList(res.data)
        })
    }
    useEffect(() => {
        getTagList()
        return () => {
            setTagList([])
            setDetails(initialData)
        };
    }, []);

    const submitHandler = e => {
        e.preventDefault();
        if (!e.target.checkValidity()) {
            // setError(true);
            return;
        }
        const { name, description, tag } = details
        if (name.trim() || description.trim()) {
            const tags = tag.map(item => item.value)
            const newObj = { name, description, tags }
            axios.post(`${process.env.REACT_APP_BASE_URL}/article`, newObj).then((res) => {
                if (res.data.success) {
                    setDetails(initialData)
                }
            })
        }
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setDetails(prev => {
            return { ...prev, [name]: value }
        })
    }
    const opt = tagList?.map(item => {
        return { value: item, label: item.title }
    })
    return (
        <div>
            <Title>add article</Title>
            <form onSubmit={submitHandler}>
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input placeholder='Title' type="text" required={true} autoComplete='off' name='name' value={details.name} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="description">Content</Label>
                    <TextArea placeholder='Content' rows={{ min: 3 }} required autoComplete='off' name='description' value={details.description} onChange={handleChange} />
                </div>
                <div>
                    <Label htmlFor="description">Tags</Label>
                    <MultipleSelect placeholder='Select tags' name='tags' options={opt} value={details.tag} onChange={e => setDetails(prev => ({
                        ...prev, tag: e
                    }))} isMulti />
                </div>
                <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
            </form>
        </div>);
};
export default Article;