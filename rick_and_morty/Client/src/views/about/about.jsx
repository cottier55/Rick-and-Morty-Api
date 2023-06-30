import styles from "./about.module.css"
import image from "./../../imag/logo sol.png"
import linkedin_logo from "./../../imag/linkedin_logo.svg"
import github_logo from "./../../imag/github_logo.svg"
import css_logo from "./../../imag/css3_logo.svg"
import html_logo from "./../../imag/html5_logo.svg"
import javascrip_logo from "./../../imag/javascript_logo.svg"
import react_logo from "./../../imag/react_logo.png"
import redux_logo from "./../../imag/redux_logo.png"
import node_logo from "./../../imag/node_logo.png"
import express_logo from "./../../imag/express_logo.svg"


const About = () => {
    return (
        
        <div className={styles.aboutContainer}>

            <h1>- About -</h1>

            <div className={styles.containerFlex}>
            

                <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt=""/>
                </div>

                <div className={styles.division}></div>
                
                <div className={styles.about}>
                    <h2>Me llamo Solange Cottier</h2> 
                    
                    <div className={styles.contact}>
                        <h3>You can find me at:</h3>
                        <a href='https://github.com/cottier55' target="_blank" rel="noopener noreferrer">
                            <img src={github_logo} className={`${styles.logo} ${styles.githubLogo}`} name='Github' alt='Github'/>
                        </a>
                        
                        <a href='https://www.linkedin.com/in/solange-cottier-920423203/' target="_blank" rel="noopener noreferrer">
                            <img src={linkedin_logo} className={`${styles.logo} ${styles.linkedInLogo}`} name='LinkedIn' alt='LinkedIn'></img>
                        </a>
                    </div>
                        
                    <h3>What was used in this project?</h3>

                    <div className={styles.herramientasContainer}>

                        <div className={styles.htmlLogo}>
                            <img src={html_logo} className={styles.htmlLogoImg} name='Javascript' alt='Javascript'/>
                        </div>

                        <div className={styles.cssLogo}>
                            <img src={css_logo} name='React' alt='React' className={styles.cssLogoImg} />
                        </div>

                        <div className={styles.jsLogo}>
                            <img src={javascrip_logo} className={styles.jsLogo} name='Javascript' alt='Javascript'/>
                        </div>

                        <div className={styles.reactLogo}>
                            <img src={react_logo} name='React' alt='React' className={styles.reactLogo} />
                        </div>

                        <div className={styles.reduxLogo}>
                            <img src={redux_logo} name='Redux' alt='Redux' className={` ${styles.reduxLogoImg}`} />
                        </div>

                        <div className={styles.nodeLogo}>
                            <img src={node_logo} name='Node' alt='NodeJS' className={` ${styles.nodeLogoImg}`} />
                        </div>

                        <div className={styles.expressLogo}>
                            <img src={express_logo} name='Express' alt='Express' className={` ${styles.expressLogoImg}`} />
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
