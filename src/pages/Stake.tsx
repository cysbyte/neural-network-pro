import React from 'react'
import styled from 'styled-components'
import bgHero from '@/assets/home/bg-hero.svg'
import bgGradient1 from '@/assets/home/bg-gradient1.svg'
import bgGradient2 from '@/assets/home/bg-gradient2.svg'
import Header from '@/components/home/header'
import Hero from '@/components/stake/hero'
import Features from '@/components/stake/features'


const Stake = () => {
    const Wrapper = styled.main`
        width: 100%;
        overflow: hidden;
        background-color: #011038;
        z-index: 10;
        min-height: 100vh;
        .upper-box {
            position: relative;
            background-color: #011038;
            max-width: 1440px;
            overflow: hidden;
            margin: auto auto;
            padding: 0 0;
            @media screen and (max-width: 800px) {
                padding: 0rem 1rem;
                overflow: hidden;
            }

        }
    `

    return (
        <Wrapper>
            <div className='upper-box'>
                <Header/>
                <Hero/>
                <Features/>
            </div>
            {/* <Footer/> */}
        </Wrapper>
    )
}

export default Stake