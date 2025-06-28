import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/createUser'
import { useSelector } from 'react-redux'

export const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth)
  return (
    <div className='flex flex-col items-center w-full mt-[5rem]'>
        <div>
            <h3 className='text-xl font-bold'>Ваш профиль</h3>
            <p className='font-medium mt-[1rem]'>Почта: {user.email}</p>
            <p className='font-medium'>Имя: {user.name}</p>
            <button className='w-[10rem] bg-[#3FCF5E] text-white rounded-[3px] p-[6px] mt-[2rem]' onClick={() => dispatch(logout())}>Выйти из аккаунта</button>
            </div>
    </div>
  ) 
}
