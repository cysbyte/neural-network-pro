import React from 'react'
import styled from 'styled-components'
import Row from './table/Row'
import Header from './table/Header'
import ActionButton from './table/ActionButton'

const Wrapper = styled.article`
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
    width: 100%;
    padding: 0.3rem 2rem;
`

const Table = () => {
    const data = [
        {
            id: 1,
            name: 'NET',
            staked: '500.00 NET',
            mir: '15.00%',
            currentRewordsEarned: '25.00 NET',
            remainingDays: '2 Days',
            action: <ActionButton name='Unstake' active={true}/>
        },
        {
            id: 2,
            name: 'NET',
            staked: '500.00 NET',
            mir: '15.00%',
            currentRewordsEarned: '25.00 NET',
            remainingDays: 'Early Redemption',
            action: <ActionButton name='Unstaked' active={false}/>
        },
        {
            id: 3,
            name: 'NET',
            staked: '500.00 NET',
            mir: '15.00%',
            currentRewordsEarned: '25.00 NET',
            remainingDays: 'Done',
            action: <ActionButton name='Claim' active={true}/>
        },
        {
            id: 4,
            name: 'NET',
            staked: '500.00 NET',
            mir: '15.00%',
            currentRewordsEarned: '25.00 NET',
            remainingDays: 'Done',
            action: <ActionButton name='Claimed' active={false}/>
        },
    ]

    return (
        <Wrapper>
            <Header/>
            {
                data.map((item) => (
                    <Row
                        key={item.id}
                        name={item.name}
                        staked={item.staked}
                        mir={item.mir}
                        currentRewardsEarned={item.currentRewordsEarned}
                        remainingDays={item.remainingDays}
                        action={item.action}
                    />
                ))
            }
        </Wrapper>
    )
}

export default React.memo(Table)