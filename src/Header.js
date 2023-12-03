import { DarkMode, Group, Home, LightMode, Login, Menu, Payment, Shop, Store, TransferWithinAStation, Translate, Upgrade } from '@mui/icons-material'
import React, { useState } from 'react'
import './head.css'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
import Cookies from 'js-cookie'
import Translates from './Translate'


function Header({scl}) {
  const [menu, setmenu] = useState(false)

  const [color, setcolor] = useState('true')



  const remember=()=>{
           Cookies.set('myCat', 'true', { 
            secure: true,
            sameSite: 'strict',
            path: '/' 
          })
          window.location.reload()
  }
  const remember2=()=>{
           Cookies.set('myCat', 'false', { 
            secure: true,
            sameSite: 'strict',
            path: '/'
           })
           window.location.reload()
  }

  const getcookie=()=>{
    let mycolor = Cookies.get('myCat')

    setcolor(mycolor)
  }



  const [stick, setstick] = useState(false)

  const scrollfunction =()=>{
    if(window.scrollY >= window.innerHeight ){
      setstick(true)
    }
  }
  window.addEventListener('scroll', scrollfunction)

  const [trs, settrs] = useState(false)

  return (
    <div  className={color !== 'true' ? 'loghd_dark hp' : 'loghd hp'} onLoad={getcookie}>


        <div className='menu'>
          <div className='menuLogo'>
              <Menu onClick={()=>setmenu(true)} id='men' />
              <div className='hglogo'>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB5Uc4yaplseKBkyPFaef6jf16aoC5kWDvrQ&usqp=CAU'} alt='' /> 
                <h3>SBER BANK</h3>
              </div>

          </div> 

          {
            menu ?
            <div className='menus' onClick={()=>setmenu(false)}>
            <div className={color !== 'true' ? 'menu_links2' : 'menu_links'}>
            <img src='https://www.drupal.org/files/project-images/540_afd6a44c7d.png' alt='' />

              <Link to='/'  className={color !== 'true' ? 'links2' : 'links'} >
                <Home id='hdic'/>
                <p>Home</p>
              </Link>

              <Link to='/about' className={color !== 'true' ? 'links2' : 'links'} >
                <Avatar id='hdic'/>
                <p>About Us</p>
              </Link>

              <Link to='/credit' className={color !== 'true' ? 'links2' : 'links'} >
              <Payment id='hdic'/>
                <p>Cards</p>
              </Link>

              <Link to='/affiliate' className={color !== 'true' ? 'links2' : 'links'} >
                <TransferWithinAStation id='hdic'/>
                <p>Affiliate</p>
              </Link> 

              <Link to='/career' className={color !== 'true' ? 'links2' : 'links'} >
                
                <Store id='hdic'/>
                <p>Career</p>
              </Link>

              <Link to='/loan' className={color !== 'true' ? 'links2' : 'links'} >
                <Upgrade id='hdic'/>
                <p>Loan</p>
              </Link>

              <Link to='/businessloan' className={color !== 'true' ? 'links2' : 'links'} >
                <Shop id='hdic'/>
                <p>Business Loan</p>
              </Link>

              <Link to='/account' className={color !== 'true' ? 'links2' : 'links'} >
                <Group id='hdic'/>
                <p>Account</p>
              </Link>

              <Link to='/login' className={color !== 'true' ? 'links2' : 'links'} >
                <Login id='hdic'/>
                <p>Login</p>
              </Link>

              <Link to='/signin' className={color !== 'true' ? 'links2' : 'links'} >
                <Login id='hdic'/>
                <p>Register</p>
              </Link>
            </div>

          </div>
          : null
          }


        </div>




        <div className='sechd' >           

        <Translate onClick={()=>trs ? settrs(false) : settrs(true)} id='hdic' />

            <div className='lit'>
                {
                  color !== 'true'?
                  <div onClick={remember}>
                    <LightMode id='hdic' />
                  </div> 
                  :
                  <div onClick={remember2}>
                    <DarkMode id='hdic' />
                  </div>
                }
                
            </div>

            <div className='top_link'>
              <Link to={'/affiliate'} className= {color !== 'true' ?'ungrouped2' : 'ungrouped'} >Affiliate</Link>
              <Link to={'/contact'} className= {color !== 'true' ?'ungrouped2' : 'ungrouped'} >Contact</Link>
              <Link to={'/signin'} className={color !== 'true' ?'ungrouped2' : 'ungrouped'} >Register</Link>
              <Link to={'/login'} className={color !== 'true' ?'ungrouped2' : 'ungrouped'} >Login</Link>
            </div>
        </div>

                {
                  trs ?
                  <div style={{position:'absolute', right:'.5em', bottom:'-4em'}}> 
                    <Translates/>
                  </div>
                  :
                  null
                }

    </div>
  )
}

export default Header