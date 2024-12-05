import React, { ReactNode } from 'react'
import styled from 'styled-components'
import iconNet from '@/assets/stake/icon-net.svg'
import done from '@/assets/stake/done.svg'
import { RowWrapper } from './RowWrapper';

interface RowProps {
    name: string;
    staked: string;
    mir: string;
    currentRewardsEarned: string;
    remainingDays: string;
    action: ReactNode;
}



const Row = (props: RowProps) => {
  return (
    <RowWrapper borderColor='#FFFFFF33' verticalPadding='1.2rem'>
        <div className='name-box'>
            <img src={iconNet} alt="" />
            <p>{props.name}</p>
        </div>
        <p>{props.staked}</p>
        <p>{props.mir}</p>
        <p>{props.currentRewardsEarned}</p>
        {
            props.remainingDays==='Done' ? <p><img src={done} alt="" /></p> : <p>{props.remainingDays}</p>
        }
        <p>{props.action}</p>
    </RowWrapper>
  )
}

export default Row