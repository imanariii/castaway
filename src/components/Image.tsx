import {CSSProperties, FC} from "react";
import Error from '../assets/error.avif'

interface IProps {
    src?: string,
    alt?: string,
    width?: number,
    height?: number,
    style?: CSSProperties,
    classNames?: string,
}

const Image:FC<IProps> = ({src=Error, alt, width, height, style, classNames}) => {
    return (
        <img src={src} alt={alt} width={`${width}px`} height={`${height}px`} style={style} className={classNames}/>
    )
}

export default Image;