import * as classes from './Nav.module.css';
const Nav = () => {
    return(
        <div className={classes.nav}>
            <div className={classes.logo}>
                Logo
            </div>
            <div className={classes.links}>
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>Help</span>
            </div>
        </div>
    )
}

export default Nav;