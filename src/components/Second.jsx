import React from 'react'
import styled from 'styled-components'
import eda from '/eda.png'

const Container = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    font-weight: 525px;
    height: 693px;
`

const Wrapper = styled.div`
    position: absolute;
    right: 350px;
    bottom: 200px;
`

const Center = styled.div`
    position: absolute;
    left: -1350px;
    bottom: -550px;
`



const Second = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
            <img src={eda} alt="" />
        </Center>
      </Wrapper>
    </Container>
  )
}

export default Second
