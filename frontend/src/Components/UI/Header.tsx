import imagePath from "../../assets/freestocks-PxM8aeJbzvk-unsplash.jpg";

const Header = () => {
  return (
    <header>
        <img src={imagePath} alt="The perfect christmas" />
        <div>
            <h1>Have a holly, jolly christmas!</h1>
            <p>We've got you covered with everything you need for the holiday season!
            Looking for the perfect christmas tree? Holiday mugs for some hot chocolate? We've got it, and more! Check out our products, now at even better holiday prices.
            </p>
        </div>
    </header>
  )
}

export default Header