import React from 'react';
import Dashboard from '../../components/Dashboard';
import styles from './MessangerPage.module.css';

const MessengerPage = () => {
    return (
        <div className={styles['messanger-page']}>
            <Dashboard />
        </div>
    );
}

export default MessengerPage;
