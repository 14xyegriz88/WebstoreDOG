import React from 'react'
import styled from 'styled-components'
import Contact from '/component.png'

const Container = styled.div`
display: flex;
justify-content: center;
`
const Wrapper = styled.div`
  justify-content: center;
`

const Container_img = styled.div`
  
`

const IMG = styled.div`
padding-top: 200px;

`

const Text = styled.div`
  position: relative;
  text-align: left;
  bottom: 250px;
  margin-left: 60px;
`

const Text_item = styled.div`
font-size: 31px;
color: white;
`

const Text_item2 = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: white;
  margin-top: 40px;
  line-height: 1.5;
  opacity: .7;
`

const Input = styled.div`
  display: flex;
  justify-content: right;
  position: relative;
  bottom: 350px;
  margin-right: 62px;
`
const InputItem = styled.input`
    font-size: 16px;
    border-style: none;
    width: 372px;
    height: 70px;
    text-align: left;
    border-radius: 10px 0px 0px 10px;
    padding-left: 10px;
    outline: none;
`

const Input_button = styled.div`

`
const Button = styled.button`
  font-size: 18px;
  border: none;
  width: 115px;
  height: 72px;
  background-color: #E27B3A;
  color: white;
  border-radius: 0px 10px 10px 0px;
`

function Six() {
  return (
      <Container>
        <Wrapper>
          <Container_img>
            <IMG>
              <img src={Contact} alt="" />
            </IMG>
          </Container_img>
          
            <Text>
              <Text_item>
                <p>Dogs leave paw prints forever.</p>
              </Text_item>

              <Text_item2>
                <p>A dog in heat needs more than shade The more people I <br/> meet the more I like my dog.</p>
              </Text_item2>
            </Text>

            <Input>
              <InputItem type='text' placeholder='Введите ваше сообщение'></InputItem>
              <Input_button>
                <Button>Отправить</Button>
              </Input_button>
            </Input>

        </Wrapper>
      </Container>
  )
}

export default Six
