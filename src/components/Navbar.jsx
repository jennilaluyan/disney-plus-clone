import DisneyLogo from '../assets/images/logo.svg'
import Home from '../assets/images/home-icon.svg'
import Search from '../assets/images/search-icon.svg'
import Watchlist from '../assets/images/watchlist-icon.svg'
import Originals from '../assets/images/original-icon.svg'
import Movies from '../assets/images/movie-icon.svg'
import Series from '../assets/images/series-icon.svg'

import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setUserLoginDetails, setSignOutState, selectUserName, selectUserEmail, selectUserPhoto } from '../app/features/user/userSlice';
import { useEffect } from 'react'

export const Navbar = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        })
    }, [userName]);

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
        }));
    };

    const handleAuth = () => {
        if (!userName) {
            signInWithPopup(auth, provider)
                .then(result => setUser(result.user))
                .catch(error => alert(error.message));
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                navigate('/');
            }).catch((err) => alert(err.message));
        }
    }

    return (
        <>
            <nav className='fixed h-24 w-screen flex items-center justify-between py-4 px-12 bg-[#040714] z-20'>
                {
                    !userName ?
                        <div className='flex justify-between items-center w-full gap-12'>
                            <div><img src={DisneyLogo} alt="Disney Logo" className='w-28' /></div>
                            <button className="max-w-32 min-w-1 w-full bg-gradient-to-r from-[#2555d8] to-[#112993] font-semibold py-1 rounded-md text-lg flex justify-center gap-2 transition-transform duration-800 ease-in-out hover:scale-103" onClick={handleAuth}>Log In</button>
                        </div>
                        :
                        <>
                            <div className='flex justify-between items-center w-full gap-12'>
                                <div className='flex items-center gap-12'>
                                    <img src={DisneyLogo} alt="Disney Logo" className='w-28' />
                                    <div className='list-none md:flex flex-row gap-7 uppercase tracking-wider'>
                                        <a className='flex flex-row gap-2'>
                                            <img src={Home} alt="Home logo" className='flex justify-center w-6' />
                                            <div className='relative inline-block pb-1 group'>Home<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-250 group-hover:w-full'></span></div>
                                        </a>
                                        <a className='flex flex-row gap-2'>
                                            <img src={Search} alt="Search logo" className='flex justify-center w-6' />
                                            <div className='relative inline-block pb-1 group'>Search<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-250 group-hover:w-full'></span></div>
                                        </a>
                                        <a className='flex flex-row gap-2'>
                                            <img src={Watchlist} alt="Watchlist logo" className='flex justify-center w-6' />
                                            <div className='relative inline-block pb-1 group'>Watchlist<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-250 group-hover:w-full'></span></div>
                                        </a>
                                        <a className='flex flex-row gap-2'>
                                            <img src={Originals} alt="Originals logo" className='flex justify-center w-6' />
                                            <div className='relative inline-block pb-1 group'>Originals<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-250 group-hover:w-full'></span></div>
                                        </a>
                                        <a className='flex flex-row gap-2'>
                                            <img src={Movies} alt="Movies logo" className='flex justify-center w-6' />
                                            <div className='relative inline-block pb-1 group'>Movies<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-250 group-hover:w-full'></span></div>
                                        </a>
                                        <a className='flex flex-row gap-2'>
                                            <img src={Series} alt="Series logo" className='flex justify-center w-6' />
                                            <div className='relative inline-block pb-1 group'>Series<span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-250 group-hover:w-full'></span></div>
                                        </a>
                                    </div>
                                </div>
                                <div className='group'>
                                    <img src={userPhoto} alt={userName} className='max-w-14 rounded-full w-full' />
                                    <div className="absolute top-19 right-16 border bg-[#090a0f] p-2 rounded-sm border-gray-700 tracking-widest text-sm opacity-0 scale-95 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto">
                                        <span onClick={handleAuth}>Log Out</span>
                                    </div>
                                </div>
                            </div>
                        </>
                }
            </nav>
        </>
    )
}