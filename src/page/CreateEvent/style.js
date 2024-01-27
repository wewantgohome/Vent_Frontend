import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`

export const Main_Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;


  h1 {
    color: var(--Grayscale-600, #35333A);
    font-family: "Pretendard Variable";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: -0.24px;
  }

  h5 {
    color: var(--Grayscale-400, #615E69);
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.16px;
  }
`

export const Body = styled.div`
  gap: 150px;
  display: flex;
  flex-direction: row;
  margin-top: 1%;
  margin-bottom: 4%;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input_Text = styled.div` 
  margin-top: 30px;
  margin-bottom: 10px;
  color: var(--Grayscale-500, #434149);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
`

export const Input_Box = styled.div`
  margin-top: 10px;
  width: 439px;
`

export const Time_Input_Box = styled.div`
  margin-top: 10px;
  width: 120px;
`

export const Time_Input = styled.div`
  width: 439px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Year_Input_Box = styled.div`
  margin: 0 11px 0 11px;
  width: 120px;
`

export const Month_Input_Box = styled.div`
  margin: 0 11px 0 11px;
  width: 73px;
`

export const Day_Input_Box = styled.div`
  margin: 0 11px 0 11px;
  width: 73px;
`

export const Event_Input = styled.textarea`
  width: 439px;
  height: 186px;
  resize: none;
  padding: 16px 20px 0 20px;
  border-radius: 4px;
  border: 1px solid var(--Grayscale-200, #D7D9DE);
  color: #B3B1BA;
`

export const Img_Input_Label = styled.label`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: max-content;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 229.089px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--Grayscale-200, #D9D8DD);
  background: var(--Grayscale-100, #F6F5F7);
`

export const EmptyImg = styled.img`

`

export const EmptyImg_Text = styled.div`
  color: var(--Grayscale-400, #615E69);
`

export const Img_Input = styled.input`
  width: 350px;
  height: 229.089px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--Grayscale-200, #D9D8DD);
  background: var(--Grayscale-100, #F6F5F7);
`

export const Amount = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Amount_Text = styled.div`
  color: var(--Grayscale-500, #434149);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.24px;
`

export const Amount_Price = styled.div`
  color: var(--Primary, #5B22FF);
  font-family: "Pretendard Variable";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; 
  letter-spacing: -0.24px;
`

export const Calculate = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const Calculate_Day = styled.div`
  color: var(--Grayscale-400, #615E69);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
`

export const Calculate_Price = styled.div`
  color: var(--Grayscale-400, #615E69);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
`

export const Payment = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`

export const Payment_Text = styled.div`
  color: var(--Grayscale-500, #434149);
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.16px;
`

export const Payment_Input_Box = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`

export const Payment_Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none; 
    width: 20px;
    height: 20px;
    border: 2px solid #ccc; 
    border-radius: 50%;
    outline: none; 
    cursor: pointer;
  }
  input:checked {
    width: 20px;
    height: 20px;
    background-color: #FFF;
    border: 2px solid #5B22FF; 
    box-shadow: 0 0 0 1.6px #5B22FF;
    fill: var(--Primary, #5B22FF);
  }

  span {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; 
    letter-spacing: -0.16px;
  }
  

`