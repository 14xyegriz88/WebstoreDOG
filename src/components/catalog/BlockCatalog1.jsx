import React from 'react'
import styled from 'styled-components'
import Item1 from '/item1.png'
import Item2 from '/item2.png'
import Item3 from '/item3.png'
import Item4 from '/item4.png'
import Food1 from '/dogfood1.png'
import Food2 from '/dogfood2.png'
import Food3 from '/dogfood3.png'
import Food4 from '/dogfood4.png'
import Cage1 from '/cage1.png'
import Cage2 from '/cage2.png'
import Cage3 from '/cage3.png'
import Cage4 from '/cage4.png'
import Dish1 from '/dish1.png'
import Dish2 from '/dish2.png'
import Dish3 from '/dish3.png'
import Dish4 from '/dish4.png'


const Container = styled.div`
    padding: 120px;
`

const Wrapper = styled.div`

`

const MainContainer = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: 100%;
`
const FirstContainer = styled.div`
     margin: 0 auto;
`
const FirstChildCont = styled.div`
    display: flex;
`
const CollarsCont = styled.div`

`
const ContainerOne = styled.div`

`
const ContainerTwo = styled.div`
    padding-left: 100px;
`
const FirstChildContItem = styled.div`
    padding-bottom: 20px;
`
const SecondChildCont = styled.div`
    
    padding-top: 100px;
`
const DogfoodCont = styled.div`
    display: flex;
`
const SecondChildContItem = styled.div`
    padding-bottom: 20px;
`
const Img = styled.img`
    display: block;
    cursor: pointer;
`
const TextCont = styled.div`
    cursor: pointer;
    padding-left: 60px;
    padding-top: 10px;
    display: inline-block;
    text-align: center; 
`
const TextCont2 = styled.div`
    cursor: pointer;
    padding-left: 30px;
    padding-top: 10px;
    display: inline-block;
    text-align: center; 
`
const Txt = styled.div`
    font-size: 18px;
`
const Txt2 = styled.div`
    font-size: 20px;
    font-weight: 500;
`
const SecondContainer = styled.div`
    margin: 0 auto;
`
const SecondChildContainer = styled.div`
    
`
const CageContainer = styled.div`
    display: flex;
    padding-bottom: 100px;
`
const DishContainer = styled.div`
    display: flex;
`

const BlockCatalog1 = () => {
  return (
    <Container>
        <Wrapper>
            <MainContainer>

                <FirstContainer>

                    <FirstChildCont>
                        <CollarsCont>
                            <ContainerOne>

                                <FirstChildContItem>
                                    <Img src={Item1} alt='' />
                                    <TextCont>
                                        <Txt>Ошейник Chacoo для <br/>собак, красный</Txt>
                                        <Txt2>3000₽</Txt2>
                                    </TextCont>
                                </FirstChildContItem>

                                <FirstChildContItem>
                                    <Img src={Item2} alt='' />
                                    <TextCont2>
                                        <Txt>Поводок вязаный DOG-Product<br/> для собак, серый</Txt>
                                        <Txt2>5000₽</Txt2>
                                    </TextCont2>
                                </FirstChildContItem>

                            </ContainerOne>
                        </CollarsCont>

                        <CollarsCont>
                                <ContainerTwo>
                                
                                    <FirstChildContItem>
                                        <Img src={Item3} alt='' />
                                        <TextCont>
                                            <Txt>Ошейник Kondors для <br/>собак, оранжевый</Txt>
                                            <Txt2>1000₽</Txt2>
                                        </TextCont>
                                    </FirstChildContItem>

                                    <FirstChildContItem>
                                        <Img src={Item4} alt='' />
                                        <TextCont2>
                                            <Txt>Поводок DOG-Product для <br/>собак, черный</Txt>
                                            <Txt2>5000₽</Txt2>
                                        </TextCont2>
                                    </FirstChildContItem>

                                </ContainerTwo>
                        </CollarsCont>
                    </FirstChildCont>

                    <SecondChildCont>
                        <DogfoodCont>

                            <ContainerOne>
                                <SecondChildContItem>
                                    <Img src={Food1} alt='' />
                                    <TextCont>
                                        <Txt>Корм сухой Pedigree для <br/>собак, с говядиной</Txt>
                                        <Txt2>5000₽</Txt2>
                                    </TextCont>
                                </SecondChildContItem>

                                <SecondChildContItem>
                                    <Img src={Food2} alt='' />
                                    <TextCont>
                                        <Txt>Корм сухой Royal Canin <br/>для собак, с говядиной</Txt>
                                        <Txt2>7000₽</Txt2>
                                    </TextCont>
                                </SecondChildContItem>
                            </ContainerOne>

                            <ContainerTwo>

                                <SecondChildContItem>
                                    <Img src={Food3} alt='' />
                                    <TextCont>
                                        <Txt>Корм сухой Foster <br/> для собак, c говядиной</Txt>
                                        <Txt2>4000₽</Txt2>
                                    </TextCont>
                                </SecondChildContItem>

                                <SecondChildContItem>
                                    <Img src={Food4} alt='' />
                                    <TextCont>
                                        <Txt>Корм сухой Pedigree <br/>для щенят, с говядиной</Txt>
                                        <Txt2>7500₽</Txt2>
                                    </TextCont>
                                </SecondChildContItem>

                            </ContainerTwo>

                        </DogfoodCont>
                    </SecondChildCont>
                </FirstContainer>

                <SecondContainer>
                    <SecondChildContainer>
                        <CageContainer>

                            <ContainerOne>

                                <FirstChildContItem>
                                    <Img src={Cage1} alt='' />
                                    <TextCont>
                                        <Txt>Клетка усиленная для <br/>собак, двухдверная</Txt>
                                        <Txt2>3000₽</Txt2>
                                    </TextCont>
                                </FirstChildContItem>

                                <FirstChildContItem>
                                    <Img src={Cage2} alt='' />
                                    <TextCont2>
                                        <Txt>Клетка DOG-Product для собак,<br/> 1х1м.</Txt>
                                        <Txt2>2500₽</Txt2>
                                    </TextCont2>
                                </FirstChildContItem>

                            </ContainerOne>

                            <ContainerTwo>
                                <FirstChildContItem>
                                        <Img src={Cage3} alt='' />
                                        <TextCont>
                                            <Txt>Клетка Kondors для собак, <br/>переносная</Txt>
                                            <Txt2>2000₽</Txt2>
                                        </TextCont>
                                    </FirstChildContItem>

                                    <FirstChildContItem>
                                        <Img src={Cage4} alt='' />
                                        <TextCont2>
                                            <Txt>Клетка ZooWell для собак, <br/>двухдверная</Txt>
                                            <Txt2>5000₽</Txt2>
                                        </TextCont2>
                                </FirstChildContItem>

                            </ContainerTwo>
                        </CageContainer>
                        
                        <DishContainer>
                            <ContainerOne>
                                <FirstChildContItem>
                                    <Img src={Dish1} alt='' />
                                    <TextCont>
                                        <Txt>Миска металлическая<br/> Chacoo для собак</Txt>
                                        <Txt2>3000₽</Txt2>
                                    </TextCont>
                                </FirstChildContItem>

                                <FirstChildContItem>
                                    <Img src={Dish2} alt='' />
                                    <TextCont2>
                                        <Txt>Миска пластиковая <br/> DOG-Product для собак, 2шт </Txt>
                                        <Txt2>5000₽</Txt2>
                                    </TextCont2>
                                </FirstChildContItem>
                            </ContainerOne>

                            <ContainerTwo>
                                    <FirstChildContItem>
                                        <Img src={Dish3} alt='' />
                                        <TextCont>
                                            <Txt>Миска Kondors для <br/>собак, серый</Txt>
                                            <Txt2>1000₽</Txt2>
                                        </TextCont>
                                    </FirstChildContItem>

                                    <FirstChildContItem>
                                        <Img src={Dish4} alt='' />
                                        <TextCont2>
                                            <Txt>Миска двойная <br/>DOG-Product для собак, серый</Txt>
                                            <Txt2>5000₽</Txt2>
                                        </TextCont2>
                                    </FirstChildContItem>
                            </ContainerTwo>

                        </DishContainer>
                    </SecondChildContainer>
                </SecondContainer>

            </MainContainer>
        </Wrapper>
    </Container>
  )
}

export default BlockCatalog1
