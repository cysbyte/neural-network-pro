import React, { Suspense } from 'react'
import styled from 'styled-components'
import StakeNet from './Stake'
import Table from './Table'
import Dialog from '../dialog/Dialog'
import { useDialogContext } from '@/providers/DialogProvider'

const Wrapper = styled.article`
    padding: 2rem 12.5rem 25rem 12.5rem;
    .top-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        width: 100%;
        .mir-box {
            margin-top: 2.5rem;
            border: 1px solid #01A9C4;
            width: 100%;
            border-radius: 32px;
            padding: 1.7rem 2rem;
            background-color: #1212121F;
            .mir {
                font-family: Inter;
                font-size: 24px;
                font-weight: 300;
                line-height: 29.05px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #FFFFFF80;
            }
            .percent {
                font-family: Inter;
                font-size: 30px;
                font-weight: 400;
                line-height: 36.31px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
                color: #FFFFFF;
                margin-top: 0.7rem;
            }
        }
    }
`
const Content = () => {

    const {showDialog, setShowDialog} = useDialogContext()
    
    const mirData = [
        {
          id: 1,
          title: 'MIR',
          desc: '15.00%',
        },
        {
          id: 2,
          title: 'Bonus Reward',
          desc: '+ 500.00 NET',
        },
      ]

    const FixWidthBox = styled.div`
    width: 1040px;
    margin: auto auto;
  `

  return (
    <Wrapper>
        <FixWidthBox>
        <div className='top-box'>
          {
            mirData.map((item)=>(
              <div className='mir-box'>
                <h5 className='mir'>{item.title}</h5>
                <p className='percent'>{item.desc}</p>
              </div>

            ))
          }
        </div>
        <StakeNet/>
        <Table/>
        {
          showDialog &&
          <Suspense fallback={<div>Loading...</div>}>
              <Dialog
                  onClose={() => setShowDialog(false)}
                  onOk={() => setShowDialog(false)}
              />
          </Suspense>
      }
      </FixWidthBox>
    </Wrapper>
  )
}

export default React.memo(Content)