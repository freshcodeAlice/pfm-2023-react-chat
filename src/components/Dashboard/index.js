import React, {useReducer, useState, useEffect} from 'react';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageArea from '../MessageArea';
import styles from './Dashboard.module.css';
import reducer from '../../reducers/reducer';
import { getMessages } from '../../api/getMessages';
import { CONSTANTS } from '../../constants';
const {ACTION_TYPES} = CONSTANTS;

const Dashboard = () => {
    const [user, setUser] = useState({
        id: 0,
        username: 'User',
        imageSrc: '/images/userImage.png'
    });  
   
   const [state, dispatch] = useReducer(reducer, {
        messages: [],
        error: null
   });
   
   /*
   useEffect запит, обробка результатів запиту таким чином, щоби дані попали в стейт

   */

   useEffect(() => {
    getMessages()
    .then(data => {
        dispatch({
            type: ACTION_TYPES.GET_MESSAGES_SUCCESS,
            payload: data.comments
        })
    })
    .catch(error => {
        dispatch({
            type: ACTION_TYPES.GET_MESSAGES_ERROR,
            error
        })
    })
   }, []);


   const addNewMessage = (text) => {
        const newMessage = {
            body: text,
            id: state.messages.length + 1,
            user
        }
        dispatch({
            type: ACTION_TYPES.ADD_NEW_MESSAGE,
            payload: newMessage
        })
   }
   
    return (
        <main className={styles['flex-row']}>
            <DialogList />
            <section className={styles['flex-column']}>
                <Chat messages={state.messages}/>
                <MessageArea submitCallback={addNewMessage}/>
            </section>
        </main>
    );
}

export default Dashboard;
