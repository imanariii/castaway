import {FC} from "react";
import {Link, useLocation} from "react-router-dom";


interface IProps {
    src: string,
    text: string
}

const CustomLink:FC<IProps> = ({src, text}) => {
    let location = useLocation();
    let activeLocation = src.split('/')[1]
    console.log(activeLocation, location)
    return (
        <Link to={`${src}`} className={location.hash===activeLocation || location.pathname==='/'+activeLocation ? 'active-link' : 'link'}>{text}</Link>
    )
}

export default CustomLink;