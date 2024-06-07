import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '/logo.png'

const Conteiner = styled.div`
    font-size: 22px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 2;
`
const Center = styled.div`
    flex: 3;
`
const Right = styled.div`
    flex: 1;
`
const ControlPanel = styled.div`
    display: flex;
    grid-gap: 15px;
    float: right;
    
    a{
        text-decoration: none;
        color: black;
    }
`

const Menu = styled.div`
    display: flex;
    grid-gap: 30px;
`

const Menu_item = styled.div`

`

const Logo_left = styled.div`
    display: flex;
    align-items: center;
`

const Logo_item = styled.div`
    margin-left: 20px;
    a {
        text-decoration: none;
        color: black;
    }
`

const Navbar_cart = () => {
  return (
    <Conteiner>
        <Wrapper>
            <Left>
                <Logo_left>
                    <a href='/'><img src={Logo} alt="" /></a>
                    <Logo_item>
                        <a href='/'>DOG</a>
                    </Logo_item>
                </Logo_left>
                
            </Left>
            <Center>
                <Menu>
                    <Menu_item>
                        Продукция
                    </Menu_item> 
                    <Menu_item>
                        Уход за собакой
                    </Menu_item>
                    <Menu_item>
                        Породы собак
                    </Menu_item>
                    <Menu_item>
                        О нас
                    </Menu_item>
                </Menu>
            </Center>
            <Right>
                <ControlPanel>
                    <SearchIcon style={{fontSize:30}} />
                    <a href='/cart'><ShoppingCartIcon style={{fontSize:30}} /></a>
                    <MenuIcon style={{fontSize:30}} />
                </ControlPanel>
            </Right>
        </Wrapper>
    </Conteiner>
  )
}

export default Navbar_cart
