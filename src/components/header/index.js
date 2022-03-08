import React,{useEffect,useState} from 'react'
import logo from '../../assets/logo.png'
import './index.css';
import { links } from '../../routes/index'
import { MdOutlineSearch ,MdArrowDropDown,MdNotifications} from "react-icons/md";



const Header = () => {
    const [active,setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            setActive(window.pageYOffset > 50)
        });
    },[]);

    return (
        <header className={active ? `active` : ''}>
            <div className="links-container">
                <img className='logo' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="logo" />
                {
                    links.map((li) => {
                        const {id,title,link} = li;
                        return (
                            <a key={id} href={link}>{title}</a>
                        )
                    })
                }
            </div>
            <div className="right-container">
                <a><MdOutlineSearch/></a>
                <a><MdNotifications/></a>
                <img src='https://avatars.githubusercontent.com/u/53361745?v=4' className="profile-container"/>
                <a><MdArrowDropDown/></a>
            </div>
        </header>
    )
}

export default Header