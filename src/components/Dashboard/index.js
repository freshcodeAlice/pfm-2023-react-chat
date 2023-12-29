import React, {useReducer} from 'react';
import DialogList from '../DialogList';
import Chat from '../Chat';
import MessageArea from '../MessageArea';
import styles from './Dashboard.module.css';

const Dashboard = () => {
   
   
   
   
   
   
    return (
        <main className={styles['flex-row']}>
            <DialogList />
            <section className={styles['flex-column']}>
                <Chat />
                <MessageArea />
            </section>
        </main>
    );
}

export default Dashboard;
