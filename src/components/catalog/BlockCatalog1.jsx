import React from 'react'
import styled from 'styled-components'



const Container = styled.div`

`

const Wrapper = styled.div`

`

const MainContainer = styled.div`
    
`
const FirstContainer = styled.div`

`
const FirstChildCont = styled.div`
    
`

const BlockCatalog1 = () => {
  return (
    <Container>
        <Wrapper>
            <MainContainer>
                <FirstContainer>
                    <FirstChildCont>
                        a
                    </FirstChildCont>
                </FirstContainer>
            </MainContainer>
        </Wrapper>
    </Container>
  )
}

export default BlockCatalog1
