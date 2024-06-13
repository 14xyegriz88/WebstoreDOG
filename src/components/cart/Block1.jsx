import React from 'react'
import styled from 'styled-components'
import Fon from '/Fonblock1.png'
import block2 from '/skibidiblok.png'
import Korm from '/edakorm.png'
import Povodok2 from '/povodok2.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
    position: relative;
    bottom: 50px;
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
        padding-left: 10px;
    }
`
const  ProductCardText = styled.div`
    padding: 35px;

    h1{
        font-size: 25px;
        font-weight: 400;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 1.6;
        opacity: calc(50%);
    }
`
const ProductCardTextP = styled.div`
    padding-top: 10px;
`
const ProductCardLeft = styled.div`
    
`
const ProductCardLeftButtons = styled.div`
    
`
const ButtonMinus = styled.button`
    border: none;
    background: none;
    cursor: pointer;

`
const ButtonPlus = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`

const Input = styled.input`
    height: 25px;
    width: 25px;
    border-radius: 3px;
    border-style: none;
    outline: none;


    Input::-webkit-outer-spin-button,
    Input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
`

const ProductCardLeftPrice = styled.div`
    
`
const ProductCardLeftIcon = styled.div`
    
`


const Block1 = () => {

    const handleKeyDown = (event) => {
        const charCode = event.key.charCodeAt(0);
        // Диапазоны ASCII кодов для букв от a до я, от А до Я, от A до Z, от a до z и специальных символов
        if ((charCode >= 1040 && charCode <= 1071) || (charCode >= 1072 && charCode <= 1103) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
            || (charCode < 48 || (charCode > 57 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122)) {
          event.preventDefault();
        }
      };
      
  return (
    <Container>
        <Wrapper>
            <Cart>
                <CartItem>
                <p>Ваша корзина 2шт.</p>
                </CartItem>
                <ProductCard>
                    <ProductIcon>
                        <img class='Icon1' src={Korm} alt="" />
                    </ProductIcon>
                    <ProductCardText>
                        <h1>Корм сухой для собак PRO PLAN Opti derma <br/> для средних пород, с лососем</h1>
                        <ProductCardTextP>
                            <p>Вес: 12кг</p>
                            <p>Арт. ПП789270912</p>
                        </ProductCardTextP>
                    </ProductCardText>
                    <ProductCardLeft>
                        <ProductCardLeftButtons>
                            <ButtonMinus><RemoveIcon/></ButtonMinus>
                            <Input type='text'  defaultValue={1} maxLength={2} onKeyPress={handleKeyDown} />
                            <ButtonPlus><AddIcon /></ButtonPlus>
                        </ProductCardLeftButtons>
                    </ProductCardLeft>
                </ProductCard>

                <ProductCard>
                    <ProductIcon>
                        <img class='Icon2' src={Povodok2} alt="" />
                    </ProductIcon>
                    <ProductCardText>
                        <h1>Поводок для собак FOXIE Double L <br/> 2,5х200см синий</h1>
                        <ProductCardTextP>
                            <p>Вес: 107гр</p>
                            <p>Арт. ПВ232091124</p>
                        </ProductCardTextP>
                    </ProductCardText>
                    <ProductCardLeft>
                        <ProductCardLeftButtons>
                            <ButtonMinus><RemoveIcon/></ButtonMinus>
                            <Input type='text'  defaultValue={1} maxLength={2} onKeyPress={handleKeyDown} />
                            <ButtonPlus><AddIcon /></ButtonPlus>
                        </ProductCardLeftButtons>
                    </ProductCardLeft>
                </ProductCard>
            </Cart>
        </Wrapper>
    </Container>
  )
}

export default Block1
