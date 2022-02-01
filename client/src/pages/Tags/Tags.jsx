import axios from 'axios';
import { useState, useEffect } from 'react';
import { Title, Label, Input, SubmitButton } from './Tags.style'
const Tags = () => {
    const initialData = { title: '', slug: '' }
    const [tagList, setTagList] = useState([]);
    const [details, setDetails] = useState(initialData);
    const getTagList = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/tags`).then((res) => {
            setTagList(res.data)
        })
    }

    useEffect(() => {
        getTagList()
        return () => setTagList([]);
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setDetails(prev => {
            return { ...prev, [name]: value }
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        if (!e.target.checkValidity()) {
            // setError(true);
            return;
        }
        const { title, slug } = details
        if (title.trim()) {
            const newObj = { title, slug }
            axios.post(`${process.env.REACT_APP_BASE_URL}/tags`, newObj).then((res) => {
                if (res.data.success) {
                    setDetails(initialData)
                }
            })
        }
    }
    return <div>
        <Title>add tag</Title>
        <form onSubmit={submitHandler}>
            <div>
                <Label htmlFor="title">Title</Label>
                <Input placeholder='Title' type="text" required={true} autoComplete='off' name='title' value={details.name} onChange={handleChange} />
            </div>
            <div>
                <Label htmlFor="slug">Slug</Label>
                <Input placeholder='Slug' type="text" required={true} autoComplete='off' name='slug' value={details.name} onChange={handleChange} />
            </div>
            <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
        </form>
    </div>;
};
export default Tags;
