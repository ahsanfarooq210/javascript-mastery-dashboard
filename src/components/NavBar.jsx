import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent
    content={title}
    position='BottomCenter'
  >
    <button type='button' onClick={()=>customFunc()} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray' >
      <span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' >
        {icon}
      </span>
    </button>
  </TooltipComponent>
)

const NavBar = () =>
{
  const { activeMenu, setActiveMenu , isClicked,setIsClicked } = useStateContext()

  const handleClick=()=>{

  }

  return (
    <div className='flex justify-between p-2 md:mx-6 relative' >
      <NavButton title='Menu' customFunc={() =>setActiveMenu((prevState) => !prevState)} color='blue' icon={<AiOutlineMenu />} />
      <div className='flex' >
      <NavButton title='Cart' customFunc={() =>handleClick('Cart')} color='blue' icon={<FiShoppingCart />} />
      <NavButton title='Chat' customFunc={() =>handleClick('Chat')} dotColor='#03c9d7' color='blue' icon={<BsChatLeft />} />
      <NavButton title='Notifications' customFunc={() =>handleClick('notification')} dotColor='#03c9d7' color='blue' icon={<RiNotification3Line />} />
      <TooltipComponent content='profile' position='BottomCenter'>
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-grey rounded-lg'>
          <img src={avatar} 
            className='rounded-full w-8 h-8'
          />
          <p>
            <span className='text-grey-400 text-14' >Hi,</span>{' '}
            <span className='text-grey-400 font-bold ml-1 text-14' >Michel</span>
          </p>
          <MdKeyboardArrowDown
            className='text-grey-400 text-14'
          />
        </div>


      </TooltipComponent>

      {isClicked.cart && <Cart/>}
      {isClicked.chat && <Chat/>}
      {isClicked.notification && <Notification/>}
      {isClicked.userProfile && <UserProfile/>}
      {isClicked.cart && <Cart/>}
      </div>
    </div>
  )
}

export default NavBar