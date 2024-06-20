import React from 'react'
import styled from 'styled-components'
import fon from '/Footar.png'
import SocialMedia from '/SocMedia.png'

const Container = styled.div`
padding-top: 200px;
background: url(${fon});
background-repeat: no-repeat;
background-position: bottom;

`
const Wrapper = styled.div`
  display: grid;
`

const TextCols = styled.div`
  overflow: hidden;
  position: relative;
  top: 100px;
`
const TextColumn1 = styled.div`
  line-height: 3;
  padding-left: 300px;
  float: left;
`

const TextColumn2 = styled.div`
  float: right;
  line-height: 3;
  padding-right: 300px;
`

const TextColsItem = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 300;
`

const Text = styled.div`
  text-align: center;
  position: relative;
  bottom: 50px;
`

const TextItem = styled.div`
  color: white;
  font-size: 48px;
`

const FootarCard = () => {
  return (
    <Container>
      <Wrapper>
        <TextCols>

          <TextColumn1>
            <TextColsItem>Product & Policy</TextColsItem>
            <TextColsItem>Privacy & About</TextColsItem>
            <TextColsItem>Contact: example@gmail.com</TextColsItem>
          </TextColumn1>
          
          <TextColumn2>
            <TextColsItem>Dog Care</TextColsItem>
            <TextColsItem>Privacy & Policy</TextColsItem>
            <TextColsItem>Popular & Product</TextColsItem>
          </TextColumn2>

        </TextCols>

        <Text>
          <TextItem>DOG-PRODUCT</TextItem>
          <TextItem>
            <img src={SocialMedia} alt="" />
          </TextItem>
        </Text>
      </Wrapper>
    </Container>
  )
}

export default FootarCard