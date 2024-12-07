import React from 'react'
import styled, { keyframes } from 'styled-components'


const ConnectButton = ({ onClick, children, loading }: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined, children: React.ReactNode, loading: boolean }) => {
  const Wrapper = styled.button`
        padding: 0.8rem 3.2rem;
        background: linear-gradient(180deg, #00D7E6 0%, #001348 100%);
        color: white;
        font-family: Inter;
        font-size: 26px;
        font-weight: 500;
        line-height: 32px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        border-radius: 40px;
        border-color: white;
        border-width: 0px;
        cursor: pointer;
    `

  return (
    <Wrapper onClick={loading ? undefined : onClick}>
      
      {children}
    </Wrapper>
  )
}

export default React.memo(ConnectButton)