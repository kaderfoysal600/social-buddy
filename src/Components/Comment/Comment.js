import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h4>{name}</h4>
            <p>{email}</p>
        </div>
    );
};

export default Comment;