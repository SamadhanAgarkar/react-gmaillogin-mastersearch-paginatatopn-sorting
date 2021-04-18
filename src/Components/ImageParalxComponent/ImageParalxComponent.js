import { Parallax, Background } from 'react-parallax';
import bgImage from "../../Assets/Images/04.jpg"
import bgImage2 from "../../Assets/Images/02.jpeg"
import bgImage4 from "../../Assets/Images/03.jpeg"


export const ImageParalxComponent= ()=>{
    return(
        <>
        <div className="row">
            <Parallax
            bgImage={bgImage}
            bgImageAlt="bgImg"
            strength={400}
            >
            <div style={{ height: '200px' }} />
            </Parallax>
        </div>
    </>
    )
}
export const ImageParalxComponentDetails= ()=>{
    return(
        <>
        <div className="row">
            <Parallax
            bgImage={bgImage}
            bgImageAlt="bgImg"
            strength={400}
            >
            <div style={{ height: '300px' }} />
            </Parallax>
        </div>
    </>
    )
}

export const ProductDetailsImageComponent= ()=>{
    return(
        <>
        <div className="row">
            <Parallax
            bgImage={bgImage2}
            bgImageAlt="bgImg"
            strength={100}
            >
            <div style={{ height: '300px' }} />
            </Parallax>
        </div>
    </>
    )
}
export const ProductDetailsImageComponentsec= ()=>{
    return(
        <>
        <div className="row">
            <Parallax
            bgImage={bgImage4}
            bgImageAlt="bgImg"
            strength={100}
            >
            <div style={{ height: '300px' }} />
            </Parallax>
        </div>
    </>
    )
}
