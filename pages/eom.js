import { Toolbar } from '../components/toolbar';
import styles from '../styles/Eom.module.css';

function eom({ employee }) {
    console.log(employee)
    return (
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image}/>
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://raw.githubusercontent.com/saugatdhimal/Next-News/main/eom.json'
    );

    const employee = await apiResponse.json();

    return {
        props: {
            employee: employee
        }
    }
}

export default eom
