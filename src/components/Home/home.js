import styles from "./home.module.css";

const home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <h1 className={styles.Hello}>Hello,world</h1>
                <h1>Welcome to my website</h1>
                
            </div>
        </div>
    )
}

export default home;