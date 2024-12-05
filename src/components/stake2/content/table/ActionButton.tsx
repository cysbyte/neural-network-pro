import { useDialogContext } from '@/providers/DialogProvider'
import React from 'react'
import styled from 'styled-components'

const ActionButton = ({ name, active }: {
  name: string,
  active: boolean,
}) => {
  const {setShowDialog} = useDialogContext()

  const handleClick = ()=>{
    if(active) {
      setShowDialog(true);
    }
  }

  const Wrapper = styled.button`
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 24.2px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        background: linear-gradient(180deg, #01A9C4 0%, #001348 100%);
        border-radius: 16px;
        color: white;
        opacity: ${active ? '1' : '0.5'};
        padding: 0.6rem 1.8rem;
        border-width: 0;
        width: 123px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `
  return (
    <Wrapper onClick={handleClick}>
      {name}
    </Wrapper>
  )
}

export default React.memo(ActionButton)