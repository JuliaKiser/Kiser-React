import styles from "./home.module.css";
import gif from "../../images/PWGenerator.gif"

const home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1 className={styles.Hello}>Welcome!</h1>
                <h2>Check out my portfolio</h2>
                
            </div>
            <img className={styles.gif} src={gif} alt="gif"></img>
        </div>
    )
}

export default home;