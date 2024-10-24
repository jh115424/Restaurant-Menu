import mainImage from "/public/mainImage.jpeg"
import "./mainImage.css"


const MainImage = () => {
    return (
    
        <img src={ mainImage} alt="Main Image" className="main-image" />
    );
}

export default MainImage;