import React from 'react'
import styled from 'styled-components'
import Collr1 from '/collar1.png'
import Collr2 from '/collar2.png'
import Harnes1 from '/oshenik1.png'
import Harnes2 from '/oshenik2.png'
import bigcollr from '/bigoshenik.png'

const Container = styled.div`
padding-right: 200px;
`
const Wrapper = styled.div`

`
const CatalogCont = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`
const ChildCont = styled.div`
  padding-top: 100px;
  display: flex;
  position: relative;
  bottom: -135px;
`
const CatalogText = styled.div`
  text-align: center;
  position: relative;
  top: -140px;
  right: -500px;
`
const CatalogTextItem = styled.div`
  font-size: 33px;
  font-weight: 400;
  padding-bottom: 10px;
`
const CatalogTextItem2 = styled.div`
  line-height: 1.5;
  letter-spacing: 4px;
  font-size: 16px;
  font-weight: 300;
`
const CollarsCont = styled.div`

`
const Collar1 = styled.div`
  padding-bottom: 30px;
`
const Collar2 = styled.div`

`
const Img = styled.img`
  
`
const HarnessCont = styled.div`
  padding-left: 30px;
`
const Harness1 = styled.div`
  padding-bottom: 30px;
`
const Harness2 = styled.div`
  
`
const BigCollar = styled.div`
padding-top: 100px;
  padding-left: 30px;
`

function five() {
  return (
        <Container>
          <Wrapper>
            <CatalogCont>
              

              <ChildCont>

                <CatalogText>
                  <CatalogTextItem>Каталог популярных товаров</CatalogTextItem>
                  <CatalogTextItem2>Здесь перечислены самые популярные<br/> товары, которые покуют чаще всего</CatalogTextItem2>
                </CatalogText>

                <CollarsCont>
                  <Collar1>
                    <Img src={Collr1} alt=''/>
                  </Collar1>
                  <Collar2>
                    <Img src={Collr2} alt='' />
                  </Collar2>
                </CollarsCont>

                <HarnessCont>
                  <Harness1>
                    <Img src={Harnes1} alt='' />
                  </Harness1>
                  <Harness2>
                    <Img src={Harnes2} alt='' />
                  </Harness2>
                </HarnessCont>

              </ChildCont>

              <BigCollar>
                <Img src={bigcollr} alt='' />
              </BigCollar>

            </CatalogCont>
          </Wrapper>
        </Container>

  )
}

export default five