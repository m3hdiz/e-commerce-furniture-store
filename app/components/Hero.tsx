import LogoWithType from "~/src/icons/Logo"
import LogoBase from "~/src/icons/LogoBase"
import { Button } from "./ui/button"

export const Hero = () => {
    return (
        <section className="hero-container">

            <div className="info-panel ">
                <div className="info-content">
                <LogoBase />
                <p className="hero-subtitle">Handcrafted in Viet Nam since 1650</p>
                <h1 className="hero-title">BAT TRANG DINNER SET</h1>
                {/* <button className="hero-button">SHOP NOW</button> */}
                <Button variant="default">Shope</Button> 
                </div>
            </div>
            
            <img src="./app/src/images/backgroundImage.jpg" alt="hero-image" />
        </section>
    )
}