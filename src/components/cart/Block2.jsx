import React from 'react'
import styled from 'styled-components'
import Brusok from '/brusok.png'
import Fon from '/FON.png'
import Brusok2 from '/brusok5.png'
import { Button } from '@mui/material'

const Container = styled.div`
    padding-top: 100px;
    padding-left: 110px;
`
const Wrapper = styled.div`
`
const DeliveryСont = styled.div`
    background: url(${Brusok});
    background-repeat: no-repeat;
    height: 146px;
    padding-bottom: 40px;
`
const DeliveryСontItem = styled.div`
    font-size: 36px;
    padding-top: 25px;
    padding-left: 25px;
`
const DeliveryContItem2 = styled.div`
    font-size: 20px;
    padding-left: 25px;
    padding-top: 25px;
    opacity: calc(70%);
    cursor: pointer;
`
const Container2 = styled.div`
    padding-top: 200px;
    background: url(${Fon});
    background-repeat: no-repeat;
    
`
const PaymentCont = styled.div`

`
const PaymentContText = styled.div`
    position: relative;
    top: -167px;
    padding-left: 80px;
`
const PaymentContItem = styled.div`
    font-size: 32px;
    padding-bottom: 20px;
    padding-left: 160px;
`
const PaymentContItem2 = styled.div`
    display: flex;
    font-size: 20px;
`
const PCIP = styled.div`
    color: #AC7848;
    cursor: pointer;
`

const DataCont = styled.div`
    float: right;
`
const DataContText = styled.div`
    position: relative;
    top: -250px;
    left: -230px;
    text-align: center;
`
const DataContItem = styled.div`
    font-size: 32px;
    padding-bottom: 20px;
`
const DataContItem2 = styled.div`
    display: flex;
    font-size: 20px;
`
const TotalCont = styled.div`
    background: url(${Brusok2});
    background-repeat: no-repeat;
    height: 146px;
    position: relative;
    top: -100px;
`
const TotalContCount = styled.div`
    padding-left: 20px;
    padding-top: 20px;
`
const TotalContCountItm = styled.div`
    font-size: 20px;
    padding-bottom: 50px;
`
const TotalContPrice = styled.div`
    text-align: center;
`
const TotalContPriceItem = styled.div`
    font-size: 26px;
    font-weight: 450;
    position: relative;
    top: -100px;
`

const TotalContButtons = styled.div`
    float: right;
    padding-right: 150px;
    position: relative;
    top: -105px;
`
const TotalContButton = styled.button`
    font-size: 24px;
    color: white;
    width: 236px;
    height: 65px;
    border-radius: 20px;
    background-color: #E27B3A;
    border: none;
    cursor: pointer;
`

const Block2 = () => {
  return (
    <Container>
        <Wrapper>

            <DeliveryСont>
                <DeliveryСontItem>Способ доставки</DeliveryСontItem>
                <DeliveryContItem2>Выбрать адрес доставки</DeliveryContItem2>
            </DeliveryСont>
            
            <Container2>
                <PaymentCont>
                    <PaymentContText>
                        <PaymentContItem>Способ оплаты</PaymentContItem>
                        <PaymentContItem2><PCIP>Войти или Зарегистрироваться</PCIP>, чтобы выбрать способ оплаты</PaymentContItem2>
                    </PaymentContText>
                </PaymentCont>

                <DataCont>
                    <DataContText>
                        <DataContItem>Мои данные</DataContItem>
                        <DataContItem2><PCIP>Войти или Зарегистрироваться</PCIP>, чтобы оформить заказ</DataContItem2>
                    </DataContText>
                </DataCont>
            </Container2>

            <TotalCont>
                <TotalContCount>
                    <TotalContCountItm>Товары, 2 шт.</TotalContCountItm>
                    <PCIP>Выбрать адрес доставки</PCIP>
                </TotalContCount>

                <TotalContPrice>
                    <TotalContPriceItem>К оплате: 5 500 ₽</TotalContPriceItem>
                </TotalContPrice>

                <TotalContButtons>
                    <TotalContButton>Заказать</TotalContButton>
                </TotalContButtons>
            </TotalCont>
        </Wrapper>
    </Container>
  )
}

export default Block2
