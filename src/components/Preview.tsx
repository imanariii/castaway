import styled from "styled-components";
import imgMainSrc from '../assets/preview.png';
import imgSubSrc from '../assets/vector_line1.png';
import imgSubTextSrc from '../assets/vector_line2.png';
import icon1 from '../assets/shopify.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icon4.png'
import icon5 from '../assets/icon1.png'
import {Image} from './index'

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 4rem 0;
`

const WrapperImage = styled.div`
  display: flex;
  align-self: flex-start;
  padding-left: 35px;
`

const WrapperText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-size: 70px;
  gap: 20px;
`

const Preview = () => {
    console.log(imgMainSrc)
    return (
        <Wrapper className='container'>
            <WrapperImage>
                <Image src={imgMainSrc} alt={"logo"} width={650} />
                <Image src={imgSubSrc} alt="lines" width={70} height={75} style={{
                        position: 'relative',
                        right: '95%',
                        bottom: '35px'
                    }}
                />

            </WrapperImage>
            <WrapperText>
                <span>
                    Take your podcast to the
                    <div className='flex row gap'>
                        <div className='flex column'>
                            <span>
                                next
                            </span>
                            <Image src={imgSubTextSrc} />
                        </div>
                        <span style={{
                            fontWeight: 600
                        }}>
                            level
                        </span>
                    </div>
                </span>

                <div className='start gap'>
                    <span style={{fontSize: '15px'}}>Listen on</span>
                    <div className="flex row gap-little">
                        <Image src={icon1} />
                        <Image src={icon2} />
                        <Image src={icon3} />
                        <Image src={icon4} />
                        <Image src={icon5} />
                    </div>
                </div>

            </WrapperText>
        </Wrapper>
    )
}

export default Preview