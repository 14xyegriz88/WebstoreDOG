import React from 'react'
import styled from 'styled-components'
import Gallery from '/Gallery.png'


const Container = styled.div`
display: flex;
justify-content: center;
padding-top: 100px;
`
function five() {
  return (
        <Container>
            <img src={Gallery} alt="" />
        </Container>

  )
}

export default five

