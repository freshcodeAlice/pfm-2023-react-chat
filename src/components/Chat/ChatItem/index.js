import React from 'react';
import styles from '../Chat.module.css';

const ChatItem = (props) => {
    const { user: {username}, body} = props.message;
    return (
        <li className={styles['chat-item']}>
           <span className={styles.author}>{username}</span>
           <span>{body}</span>     
        </li>
    );
}

export default ChatItem;
