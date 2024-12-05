import styled from 'styled-components'

const Input = () => {
    const Wrapper = styled.div`
        width: 100%;
        background-color: rgba(0,0,0,0);
        flex: 2;
        input {
            width: 100%;
            border: none;          
            outline: none;        
            padding: 1rem 0;     
            margin-top: 1rem;   
            background-color: rgba(0,0,0,0);
            color: white;            
            @media screen and (max-width: 800px) {
                margin-top: 1rem; 
            }
        }
        input:focus {
            color: white;
        }
        input::placeholder {
            font-family: Inter;
            font-size: 30px;
            font-weight: 400;
            line-height: 36.31px;
            text-align: left;
            text-underline-position: from-font;
            text-decoration-skip-ink: none;
            color: #FFFFFF;
            opacity: 0.2;
            @media screen and (max-width: 800px) {
                font-family: Inter;
                font-size: 12px;
                font-weight: 300;
                line-height: 20px;
                text-align: left;
                text-underline-position: from-font;
                text-decoration-skip-ink: none;
            }
        }
    `
  return (
    <Wrapper>
         <input type="text" placeholder='0.00'/>
    </Wrapper>
  )
}

export default Input