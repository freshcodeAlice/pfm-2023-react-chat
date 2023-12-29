import React, {useState} from 'react';
import styles from './MessageArea.module.css';

const MessageArea = (props) => {
    const [text, setText] = useState('');

    const changeHandler = ({target: {value}}) => {
        setText(value)
    }

   const submitHandler = (event) => {
        event.preventDefault();
        props.submitCallback(text);
        setText('');
    }

    return (
        <form className={styles.container} onSubmit={submitHandler}>
            <textarea value={text} onChange={changeHandler}>
            </textarea>
            <button>Submit</button>
        </form>
    );
}

export default MessageArea;
