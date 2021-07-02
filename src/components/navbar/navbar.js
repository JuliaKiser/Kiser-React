import styles from './navbar.module.css'

const navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/#about">About Me</a>
                    </li>
                    <li>
                        <a href="/#projects">Projects</a>
                    </li>
                    <li>
                        <a href="/#skills">Skills</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar;