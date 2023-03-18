import HomeNav from "../components/navigation/Home-nav";
import classes from "./Home.module.scss"

const Home = () => {
    return (
        <div className={classes["main-page"]}>
            <section className={classes.navigation}>
                <HomeNav/>
                <h1>Header content</h1>
            </section>
        </div>
    )
}

export default Home