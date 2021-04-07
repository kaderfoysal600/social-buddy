import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {id} = useParams();
    const [post, setPost] = useState([])
    const[comments, setComments] = useState([])
    useEffect(()=> {
        const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data))

    },[]) 

    useState(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
    
    return (
        <div>
            <h1>This is post detail:{id}</h1>
            <p>user posted {post.id}</p>
            <h2>title :{post.title}</h2>
            <p>body : {post.body}</p>
            <p>comments: {comments.length}</p>
            {
                comments.map(comment => <Comment comment = {comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;