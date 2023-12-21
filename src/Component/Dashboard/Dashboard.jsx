// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './Dashboard.module.css';
import LineChart from '../Charts/LineChart';
// import LineChart from '../Charts/LineChart';
const Dashboard = ({title, width, children }) => {
    return (
   
        <div className={`${styles.container} ${width}`}>
          <div className={styles.header}> 
            <h5>{title}</h5>
          </div> 
          {children}
        </div>
    )
}

export default Dashboard; 