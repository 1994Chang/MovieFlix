import { LoaderName } from "react-awesome-loaders"
import './loader.css'

function LoadingComponent(props) {
    return (
        <LoaderName
            gradientColors={["#e91616", "#ffc2c2"]}
            shadowColor={"#a11010"}
            desktopSize={"128px"}
            mobileSize={"100px"}
        />
    );
}
export default LoadingComponent