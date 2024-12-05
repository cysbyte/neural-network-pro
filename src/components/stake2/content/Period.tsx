import React from 'react'
import styled from 'styled-components'
import periodActive from '@/assets/stake/period-active.svg'
import periodInactive from '@/assets/stake/period-inactive.svg'

const Period = ({ active, month }:
    { active: boolean, month: number }) => {
    const Wrapper = styled.div`
        width: 170px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        gap: 1.3rem;
        div {
            width: 100%;
            height: 10px;
            border-radius: 2px;
            background-color: ${active ? '#01A9C4' : '#B6A7CF'};
            position: relative;
            .img {
                position: absolute;
                top: -10px;
                right: -14px;
                z-index: 10;
            }
        }
        p {
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 19.36px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: white;
            margin-right: -11px;
        }
    `
    return (
        <Wrapper>
            <div>
                <img className='img' src={active ? periodActive : periodInactive} alt="" />
            </div>
            <p>{month}m</p>
        </Wrapper>
    )
}

export default React.memo(Period)