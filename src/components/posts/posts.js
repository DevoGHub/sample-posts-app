import './posts.css';

import Loader from '../loader/loader.js';

import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Posts(){
    // States
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Effects
    // useEffect(() => {
    //     setIsLoading(true);
    //     setTimeout(() => {
    //         const fetchData = async () => {
    //             const response = await fetch('http://localhost/Projects/PHP_API/api/post/read.php', {
    //                 method : 'GET',
    //                 headers : {
    //                     "Content-Type" : "application/json"
    //                 }
    //             })
    //             return response.json();
    //         }
    //         fetchData().then(({data}) => {
    //             setPosts(data);
    //             setIsLoading(false);
    //         });
    //     }, 2000);
    // }, []);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => axios.get('http://localhost/Projects/PHP_API/api/post/read.php').then(({data}) => {
            setPosts(data.data)
            setIsLoading(false)
        }), 2000)
    }, []);

    // Component Returns
    if(isLoading) return <Loader />;

    return (
        <div className="main-component main-grid posts-main">
            {
                posts.map(ele => {
                    return (
                        <Link key={ele.id} to={`/posts/${ele.id}`}>
                            <div className='post-item'>
                                <span>{ele.title}</span>
                                <span>{ele.author}</span>
                            </div>
                        </Link>
                    );
                })
            }      
        </div>
    );
}

export default Posts;