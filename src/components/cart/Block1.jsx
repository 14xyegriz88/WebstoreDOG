import React from 'react'
import styled from 'styled-components'
import Fon from '/Fonblock1.png'
import block2 from '/skibidiblok.png'
import Korm from '/edakorm.png'
import Povodok2 from '/povodok2.png'

const Container = styled.div`
    background: url(${Fon});
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
    margin-top: 100px;
`
const Wrapper = styled.div`

`
const Cart = styled.div`
    
`
const CartItem = styled.div`
    padding-left: 120px;
    p{
        font-size: 26px;
        font-weight: 600;
    }
`
const ProductCard = styled.div`
    background: url(${block2});
    height: 208px;
    width: 1534px;
    margin-left: 165px;
    margin-bottom: 50px;
    display: flex;
`
const ProductIcon = styled.div`
    
    .Icon1{
        padding-top: 35px;
    }

    .Icon2{
        padding-top: 56px;
    }
`
const  ProductCardText = styled.div`
    padding: 35px;

    h1{
        font-size: 25px;
        font-weight: 600;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 1.6;
        opacity: calc(50%);
    }
`


const Block1 = () => {
  return (
    <Container>
        <Wrapper>
            <CartItem>
                <p>Корзина</p>
            </CartItem>
            <Cart>
                <ProductCard>
                    <ProductIcon>
                        <img class='Icon1' src={Korm} alt="" />
                    </ProductIcon>
                    <ProductCardText>
                        <h1>Purina Pro Plan для щенков средних и мелких пород</h1>
                        <p>Вес: 12кг</p>
                        <p>Арт. ПП789270912</p>
                    </ProductCardText>
                </ProductCard>

                <ProductCard>
                    <ProductIcon>
                        <img class='Icon2' src={Povodok2} alt="" />
                    </ProductIcon>
                    <ProductCardText>
                        <h1>Поводок для собак и кошек</h1>
                        <p>Длинна: 5м</p>
                        <p>Арт. ПД789270913</p>
                    </ProductCardText>
                </ProductCard>
            </Cart>
        </Wrapper>
    </Container>
  )
}

export default Block1
