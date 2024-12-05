
import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Period from './Period'
import ConnectButton from '@/components/stake/hero/ConnectButton'

const StakeNet = () => {
    const periods = [
        {
            id: 1,
            active: true,
            month: 1,
        },
        {
            id: 2,
            active: true,
            month: 3,
        },
        {
            id: 3,
            active: true,
            month: 6,
        },
        {
            id: 4,
            active: true,
            month: 12,
        },
        {
            id: 5,
            active: false,
            month: 18,
        },
    ]
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-contetn: center;
        gap: 0rem;
        width: 100%;
        border: 1px solid #01A9C4;
        background-color: #1212121F;
        border-radius: 32px;
        overflow: hidden;
        margin-top: 2rem;
        .upper-box {
            width: 100%;
            padding: 2rem;
            background-color: #1212121F;
            .stake-net-box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                h5 {
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 29.05px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                }
                p {
                    font-family: Inter;
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 24.2px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    span {
                        color: #FFFFFF;
                    }
                }
            }
            .input-box {
                padding: 0.5rem 2rem;
                background-color: #FFFFFF1F;
                border-radius: 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-top: 1rem;
                button {
                    font-family: Inter;
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 24.2px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    background: linear-gradient(180deg, #01A9C4 0%, #001348 100%);
                    border-radius: 16px;
                    color: white;
                    padding: 0.6rem 2rem;
                    border-width: 0;
                }
            }
        }
        .middle-box {
            width: 100%;
            padding: 0rem 2rem;
            background-color: #1212121F;
            .staking-period-box {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                h5 {
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 29.05px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                }
                p {
                    font-family: Inter;
                    font-size: 20px;
                    font-weight: 300;
                    line-height: 24.2px;
                    text-align: left;
                    text-underline-position: from-font;
                    text-decoration-skip-ink: none;
                    color: #FFFFFF80;
                    span {
                        color: #FFFFFF;
                    }
                }
            }
            .period-box {
                padding: 4rem 3rem 1.5rem 2.5rem;
                background-color: #FFFFFF1F;
                border-radius: 24px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                margin-top: 1rem;
            }
        }
        .connect-button-box {
            margin: 2rem 0rem;
        }
    `
  return (
    
    <Wrapper>
        <div className='upper-box'>
            <div className='stake-net-box'>
                <h5 className='stake-net'>Stake NET</h5>
                <p className='balance'>Balance: <span>100.23 NET</span></p>
            </div>
            <div className='input-box'>
                <Input/>
                <button>Max</button>
            </div>
        </div>
        <div className='middle-box'>
            <div className='staking-period-box'>
                <h5>Staking Period</h5>
                <p></p>
            </div>
            <div className='period-box'>
                {
                    periods.map((item)=>(
                        <Period key={item.id} active={item.active} month={item.month}/>
                    ))
                }
            </div>
        </div>
        <div className='connect-button-box'>
            <ConnectButton/>
        </div>
    </Wrapper>
  )
}

export default React.memo(StakeNet)