import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4.5rem 1.5rem 4.8rem;
  position: relative;
  @media screen and (max-width: 800px) {
      padding: 1.8rem 1rem;
  }
  h2 {
    font-family: Inter;
    font-size: 40px;
    font-style: italic;
    font-weight: 600;
    line-height: 48.41px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    background: linear-gradient(180deg, #FFFFFF 0%, #01BFD3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
    z-indx: 10;
    @media screen and (max-width: 800px) {
        font-size: 20px;
    }
  }
    .right-box {
      display: flex;
      gap: 1.3rem;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: 800px) {
          display: none;
      }
      .signin-button {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
        text-decoration: none;
      }
      .connect-button {
        padding: 1rem 2.2rem;
        background: linear-gradient(180deg, #00D7E6 0%, #001348 100%);
        color: white;
        font-family: Inter;
        font-size: 16px;
        font-weight: 700;
        line-height: 19.36px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        border-radius: 40px;
        border-color: white;
        border-width: 0px;
        cursor: pointer;
      }
  }
  
`
const Header = () => {
  return (
    <Wrapper>
      <h2>Neural Network</h2>
      <div className='right-box'>
        {/* <Link to='' className='signin-button'>Sign in</Link> */}
        <button className='connect-button'>Connect Wallet</button>
      </div>
    </Wrapper>
  )
}

export default Header