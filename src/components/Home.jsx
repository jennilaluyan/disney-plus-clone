import background from '../assets/images/home-background.png'
import styled from 'styled-components'
import { ImgSlider } from './ImgSlider'

export const Home = () => {
    return (
        <Container>
            <ImgSlider />
        </Container>
    )
}

const Container = styled.div`
                position: relative;
                min-height: calc(100vh - 250px);
                overflow-x: hidden;
                display: block;
                top: 96px;
                padding: 0 calc(3.5vw + 5px);

                &::after {
                    content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: url("${background}") center center / cover no-repeat;
                z-index: -1; /* stays behind content */
                opacity: 1;
    }
                `;
