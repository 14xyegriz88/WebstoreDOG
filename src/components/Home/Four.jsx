import React from 'react'
import styled from 'styled-components'
import telkaisobaka from '/telkaisobaka.png'



const Container = styled.div`
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
`

const Photo = styled.div`
    margin-top: 120px;
`

const Text = styled.div`
    margin-top: 210px;
`

const Txt = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #E27B3A;
    letter-spacing: 5px;
`

const  Txt2 = styled.p`
    margin-top: 25px;
    font-size: 32px;
`

const Txt3 = styled.p`
    font-size: 16px;
    margin-top: 60px;
    text-align: left;
    font-weight: 300;
    line-height: 1.5;
`

const Button1 = styled.button`
    font-size: 16px;
    border-radius: 24px;
    width: 189px;
    height: 48px;
    background-color: #E27B3A;
    color: white;
    border: none;
`

const Button2 = styled.button`
    font-size: 16px;
    margin-left: 25px;
    border-radius: 24px;
    width: 139px;
    height: 48px;
    border: 2px solid #E27B3A;
    color: #E27B3A;
`

const Buttons = styled.div`
    display: flex;
    margin-top: 40px;
`

const Four = () => {
  return (
    <Container>
        <Wrapper>
            <Photo>
                <img src={telkaisobaka} alt="" />
            </Photo>

            <Text>
                <Txt>УХОД ЗА СОБАКОЙ</Txt>
                <Txt2>Запись к ветеренару</Txt2>
                <Txt3>
                    Так же, наша компания предлагает многие другие услуги по<br/>
                    уходу за вашими питомцами, одна из таких услуг является<br/>
                    ветеренаром.
                </Txt3>
                <Buttons>
                    <Button1>Записаться сейчас</Button1>
                    <Button2>Детали</Button2>
                </Buttons>
                
            </Text>


        </Wrapper>  
    </Container>
  )
}

export default Four
