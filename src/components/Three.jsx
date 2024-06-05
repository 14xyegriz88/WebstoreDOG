import React from 'react'
import styled from 'styled-components'
import povodki from '/povodki.png'
import korma from '/korma.png'
import osheiniki from '/osheiniki.png'
import kletka from '/kletka.png'
import uhod from '/uhod.png'


const Container = styled.div`

`


const Wrapper = styled.div`
    /* right: 350px;
    bottom: 200px; */
`

const Top = styled.h1`
    font-size: 32px;
    /* display: flex; */
    text-align: center;
    margin-bottom: 35px;
    font-weight: 400;
`

const Botom = styled.div`
    font-size: 20px;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 300;
`

const Left1 = styled.div`
    margin-top: 25px;
    margin-right: 80px;
    `
const Left2 = styled.div`
    margin-right: 100px;
    margin-top: 25px;`   


const Cont = styled.div`    
    display: flex;
    justify-content: center;
`


const Text1 = styled.p`
font-weight: 400;
font-size: 27px;
text-align: center;
    
`

const Button = styled.button`
    margin-top: 100px;
    font-size: 16px;
    border-radius: 9px;
    width: 234px;
    height: 48px;
    border: 2px solid #E27B3A;
    border-width: 1px;
    color: #E27B3A;
`

const Button2 = styled.div`
    text-align: center;
    justify-content: center;
`

const Three = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    Популярная продукция
                </Top>

                <Botom>
                    <p>Собаке нужен тщательный уход, по этому мы хотим предложить вам</p>
                    <p>нашу продукцию по уходу за собакой</p>
                </Botom>

            </Wrapper>
            <Container>
                <Cont>
                    <Left2>
                            <img src={povodki} alt="" />
                        <Text1>
                            Поводки от 3 до 5 метров
                        </Text1>

                    </Left2>
                    <Left1>
                            <img src={osheiniki} alt="" />
                        <Text1>
                            Ошейники
                        </Text1>

                    </Left1>
                </Cont>

                <Cont>
                    <Left1>
                        <img src={korma} alt="" />
                        <Text1>
                            Корма для собак
                        </Text1>
                        
                    </Left1>

                    <Left1>
                        <img src={kletka} alt="" />
                        <Text1>
                            Переносные клетки для <br/>собак
                        </Text1>
                        
                    </Left1>

                    <Left1>
                        <img src={uhod} alt="" />
                        <Text1>
                            Предметы для ухода за <br/> собакой
                        </Text1>
                    </Left1>
                </Cont>
            </Container>

            <Button2>                    
                <Button>
                    Посмотреть всю продукцию
                </Button>
            </Button2>


        </Container>

    )
}

export default Three
