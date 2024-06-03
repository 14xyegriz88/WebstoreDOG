import React from 'react'
import styled from 'styled-components'
import sobaka from '/sobaka.png'
import fon2 from '/fon2.png'

const Conteiner = styled.div`
    background: url(${fon2});
    background-size: contain;
    background-repeat: no-repeat;
    font-weight: 525px;
    height: 693px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    position: absolute;
    font-size: 55px;
    bottom: 500px;
    right: 1100px;
`
const Center = styled.div`
    position: absolute;
    right: 350px;
    bottom: 200px;
`
const Right = styled.div`
    padding: 100px;
    display: flex;
    justify-content: space-between;
`
const Left_butons = styled.div`
    position: absolute;
    font-size: 30px;
    bottom: 350px;
    right: 1350px;
    
`
const Button1 = styled.button`
    
`

const Button2 = styled.button`
    
`

const First = () => {
  return (
    <Conteiner>
        <Wrapper>
            <Left>
            <h1>Пес - мой </h1>
            <h2>второй пилот.</h2>
            </Left>

            <Left_butons>
                <Button1>купить </Button1>
                <Button2>детали</Button2>
            </Left_butons>

            <Center>
                <img src={sobaka} alt="" />
            </Center>

            {/* <Right>
                <img src={fon1} alt="" />
            </Right> */}
        </Wrapper>
    </Conteiner>
  )
}

export default First
