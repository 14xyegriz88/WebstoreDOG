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
`

const Botom = styled.div`
    font-size: 6px;
    text-align: center;
    margin-bottom: 30px;
`

const Left1 = styled.div`
    margin-top: 25px;
    margin-right: 50px;
`


const Cont = styled.div`
    display: flex;
    justify-content: center;
`


const Text1 = styled.p`
font-weight: 300;
text-align: center;
    
`


const Three = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    Популярная продукция
                </Top>

                <Botom>
                    <h1>Собаке нужен тщательный уход, по этому мы хотим предложить вам</h1>
                    <h2>нашу продукцию по уходу за собакой</h2>
                </Botom>

            </Wrapper>
            <Container>
                <Cont>
                    <Left1>
                            <img src={povodki} alt="" />
                        <Text1>
                            поводки от 3 до 5 метров
                        </Text1>

                    </Left1>
                    <Left1>
                            <img src={osheiniki} alt="" />
                        <Text1>
                            корма для собак
                        </Text1>

                    </Left1>
                </Cont>

                <Cont>
                    <Left1>
                        <img src={korma} alt="" />
                        <Text1>
                            ошейники
                        </Text1>
                        
                    </Left1>

                    <Left1>
                        <img src={kletka} alt="" />
                        <Text1>
                            переносные клетки для собак
                        </Text1>
                        
                    </Left1>

                    <Left1>
                        <img src={uhod} alt="" />
                        <Text1>
                            предметы для ухода за собакой
                        </Text1>
                    </Left1>
                </Cont>
            </Container>
        </Container>

    )
}

export default Three
