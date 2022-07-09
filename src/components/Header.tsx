import Link from "next/link"
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import type { NextPage } from 'next'
import Button from 'react-bootstrap/Button'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { useEffect } from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#3399ff' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#3399ff' : '#3399ff',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#3399ff' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

const Header: NextPage = () => {

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    // When mounted on client, now we can show the UI
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" fixed="top">
        <Container>
          <Navbar.Brand id="navbarbrand"><Link href="/"><div id="homelogo"></div></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link eventKey="1" as={Link} href={"/"}>Home</Nav.Link>
                <Nav.Link eventKey="2" as={Link} href={"/"}>Content</Nav.Link>
                <Nav.Link eventKey="3" as={Link} href={"/"}>About me</Nav.Link>
                <Nav.Link eventKey="4" as={Link} href={"/"}>Need a website?</Nav.Link>
{/* 
                <Link href='/'><Button variant="light"><span>Home</span></Button></Link>
                <Link href='/about'><Button variant="light"><span>Content</span></Button></Link>
                <Link href='/about'><Button variant="light"><span>About me</span></Button></Link>
                <Link href='/about'><Button variant="light"><span>Need a website?</span></Button></Link> */}
                {/* <button onClick={() => setTheme('light')}>Light Mode</button>
                <button onClick={() => setTheme('dark')}>Dark Mode</button>
                <button onClick={() => setTheme('system')}>System Mode</button> */}
                <MaterialUISwitch onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}/>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    // <header>
    //     <nav className="fixed-top navbar navbar-default bg-transparent">
    //         <div className="container-fluid">
    //         <div className="navbar-header">
    //         <Link href='/'><img src="/finallogo.svg" alt="glew.tech logo"/></Link>
    //         </div>
    //         <div></div>
    //             <div className="navbar-nav align-items-center">
    //             <span className="nav-item active">
                    // <Link href='/about'>
                    // <Button variant="light">
                    // <span>About</span>
                    // </Button>
                    // </Link>
    //             </span>
    //             </div>
    //         </div>
    //     </nav>
    // </header>
  )
}

export default Header