import cl from './Header.module.scss';
import {Link} from "react-router-dom";
import profileDefault from '../../assets/images/profileDefault.jpg';
import {FC, useEffect, useRef, useState} from "react";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
const Header:FC = () => {
    const [menuActive, setMenuActive] = useState(false);
    const menuRef = useRef<null | HTMLDivElement>(null);
    const headerMenuRef = useRef<null | HTMLDivElement>(null);
    useEffect(()=>{
    const handleClickOutside=(event:MouseEvent)=>{
        if(menuRef.current && (!(menuRef.current as Node).contains(event.target as Node) && !(headerMenuRef.current as Node).contains(event.target as Node))){
            setMenuActive(false);
        }
    };
    document.addEventListener('click', handleClickOutside);
    return ()=>{
        document.removeEventListener('click', handleClickOutside);
    }
    },[menuRef])

    return (
        <header className={cl.header}>
            <div className={cl.header__logo}>Logo</div>
            <div className={cl.header__content}>
                <Link to={'#'} className={cl.header__link}>Головна</Link>
            </div>
            <div ref={headerMenuRef} className={cl.header__profile} onClick={()=>setMenuActive(prev=>!prev)}>
                <img src={profileDefault} alt="#"/>
            </div>
            <HeaderMenu menuActive={menuActive} menuRef={menuRef}/>
        </header>
    );
};

export default Header;