import React from "react"
import { RowWrapper } from "./RowWrapper"

const Header = () => {
    
  return (
    <RowWrapper borderColor="#FFFFFF00" verticalPadding="1.8rem">
        <div></div>
        <p>Staked</p>
        <p>MIR</p>
        <p>Bonus Reward</p>
        <p>Remaining Days</p>
        <p></p>
    </RowWrapper>
  )
}

export default React.memo(Header)