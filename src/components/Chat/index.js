import React from 'react';
import styles from './Chat.module.css';
import ChatItem from './ChatItem';

const Chat = (props) => {
    return (
        <section className={styles.chat}>
            {props.messages.map(m => <ChatItem key={m.id} message={m}/>)}
        </section>
    );
}

export default Chat;
