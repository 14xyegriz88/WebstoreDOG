import React from 'react'
import styled from 'styled-components'
import Fon from '/fon5.png'
import Korm1 from '/korm1.png'
import Korm2 from '/korm2.png'
import Korm3 from '/pidor.png'

const Container = styled.div`
  padding-bottom: 20px;
  align-items: center;
`

const Wrapper = styled.div`
`
const ProductCont = styled.div`
  display: flex;
  padding-left: 200px;
  background-repeat: no-repeat;
  width: 1548px;
  height: 339px;

`
const LeftCont = styled.div`
  flex: 1;
  background: url(${Korm1});
  background-repeat: no-repeat;
  width: 360px;
  height: 292px;
`

const LeftText = styled.div`
  text-align: center;
  position: relative;
  top: 120px;
  left: -30px;
`
const LeftTextItem = styled.div`
  font-size: 25px;
`
const LeftTextItem2 = styled.div`
    font-size: 11px;
    padding-top: 10px;
`
const CenterCont = styled.div`
  flex: 1;
  padding-left: 50px;
  padding-right: 50px;
  background: url(${Korm2});
  background-repeat: no-repeat;
  width: 360px;
  height: 292px;
`
const CenterText = styled.div`
  text-align: center;
  position: relative;
  top: 120px;
  left: -90px;
`
const CenterTextItem = styled.div`
  font-size: 25px;
`
const CenterTextItem2 = styled.div`
   font-size: 11px;
   padding-top: 10px;
`
const RightCont = styled.div`
  flex: 1;
  background: url(${Korm3});
  background-repeat: no-repeat;
  width: 360px;
  height: 292px;
`
const RightText = styled.div`
  text-align: center;
  position: relative;
  top: 120px;
  left: -40px; 
`
const RightTextItem = styled.div`
  font-size: 25px;
`
const RightTextItem2 = styled.div`
  font-size: 11px;
  padding-top: 10px;
`
const Second = () => {
  return (
    <Container>
      <Wrapper>
        <ProductCont>

          <LeftCont>
            <LeftText>
              <LeftTextItem>Royal Canin корм для <br/> взрослых крупных собак</LeftTextItem>
              <LeftTextItem2>Сухой корм для крупных пород ROYAL CANIN Maxi <br/> помогает поддерживать здоровое пищеварение <br/>(вес взрослой собаки от 26 до 44 кг)</LeftTextItem2>
            </LeftText>
          </LeftCont>

          <CenterCont>
            <CenterText>
              <CenterTextItem>Purina Pro Plan для щенков <br/> средних и мелких пород</CenterTextItem>
              <CenterTextItem2>Все корма PRO PLAN разработаны на основе<br/> современных научных достижений. Рационы PRO PLAN <br/>рекомендованы ветеринарными специалистами <br/>и заводчиками</CenterTextItem2>
            </CenterText>
          </CenterCont>
          
          <RightCont>
            <RightText>
              <RightTextItem>Hill's Science Plan сухой<br/> корм для взрослых собак<br/> мелких пород</RightTextItem>
              <RightTextItem2>Содержит ActivBiome+, эксклюзивную смесь<br/> пребиотиков Hill's, которая помогает быстро питать и <br/>поддержать баланс уникального микробиома вашего<br/> питомца</RightTextItem2>
            </RightText>
          </RightCont>

        </ProductCont>
      </Wrapper>
    </Container>
  )
}

export default Second
