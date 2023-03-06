import './Hero.css'
import wedding from "../../assets/images/wedding.jpg"
import underwater from "../../assets/images/underwater.jpg"
import rocks from "../../assets/images/rocks.jpg"


export default function Hero() {
    return (
        <>
        <section className="wrapper">
            <div className="row">
                <div className="column">
                    <img className="gallery-img" src={wedding} />
                    <img className="gallery-img" src={rocks} />
                </div>
                <div className="column">
                    <img className="gallery-img" src={underwater} />
                    <img className="gallery-img" src={wedding} />  
                </div>
                <div class="column">
                    <img className="gallery-img" src={wedding} />
                    <img className="gallery-img" src={rocks} />
                </div>
                <div class="column">
                    <img className="gallery-img" src={underwater} />
                    <img className="gallery-img" src={wedding} />  
                </div>
            </div>
        </section>
        
        <div className="middle">
            <h2>Online Experiences</h2>
            <p>
                Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
        </>
    )
}