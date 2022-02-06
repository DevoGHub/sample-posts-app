import './viewPost.css';

import {useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NotFound from '../notFound/notFound';
import Loader from '../loader/loader';
function ViewPost(){
    // Other Variables
    const {id} = useParams(); // {id : '<passed string>'}

    // states
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [notFound, setNotFound] = useState(false);

    // effects
    useEffect(() => {
        setIsLoading(true);
        axios.get(`http://localhost/Projects/PHP_API/api/post/read_single.php?id=${id}`).then(({data}) => {
            data === 'No such data' ? setNotFound(true) : setPost(data);
            setIsLoading(false)
        })
    }, [id]);

    // DOM Functions
    function updatePost({target}){
        const iparr = document.querySelectorAll('.post-input');

        let sendData = {
            id : target.getAttribute('data-id')
        }
        for(const ele of iparr){
            sendData[ele.id.split('-')[1]] = ele.value;
        }

        setIsLoading(true);
        try{
            axios.put('http://localhost/Projects/PHP_API/api/post/update.php', sendData).then(() => {
                setPost(sendData)
                setIsLoading(false)
            })
        } catch(error) {
            setIsLoading(false);
            window.alert('Some error occured');
        }
    }

    function deletePost({target}){
        const id = target.getAttribute('data-id')
        setIsLoading(true);
        try{
            axios.delete('http://localhost/Projects/PHP_API/api/post/delete.php',{data : {id}}).then(() =>{
                setIsLoading(false);
                setNotFound(true);
            })
        } catch(error) {
            setIsLoading(false);
            window.alert('Some error occured');
        }
    }
    
    // Component Returns
    if(isLoading) return <Loader />

    if(notFound) return <NotFound />;

    return (
        <div className='main-component main-flex column-flex view-post-main'>
            <form>
                <label htmlFor='post-title'>Title</label>
                <input type='text' placeholder='Title' defaultValue={post.title} id='post-title' className='post-input'/>

                <label htmlFor='post-author'>Author</label>
                <input type='text' placeholder='Author' defaultValue={post.author} id='post-author' className='post-input'/>

                <label htmlFor='post-body'>Body</label>
                <textarea placeholder='Body' rows='10' defaultValue={post.body} id='post-body' className='post-input'/>

                <button type='button' onClick={updatePost} data-id={post.id}>Edit Post</button>
                <button type='button' onClick={deletePost} data-id={post.id}>Delete Post</button>
            </form>
        </div>
    );
}

export default ViewPost;