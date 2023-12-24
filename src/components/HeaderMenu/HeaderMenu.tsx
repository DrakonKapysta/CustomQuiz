import classnames from "classnames";
import cl from "../Header/Header.module.scss";
import profileDefault from "../../assets/images/profileDefault.jpg";
import {FC, RefObject} from "react";

interface HeaderMenuProps{
    menuActive: boolean,
    menuRef: RefObject<HTMLDivElement>
}

const HeaderMenu:FC<HeaderMenuProps> = ({menuActive, menuRef}) => {

    return (
        <div ref={menuRef} className={classnames(cl.header__menu, cl.menu,{
            [cl.active]:menuActive,
        })}>
            <div className={cl.menu__profile}>
                <div className={cl.menu__avatar}>
                    <img src={profileDefault} alt="#"/>
                </div>
                <div className={cl.menu__info}>
                    <p className={cl.menu__name}>Oleg</p>
                    <p className={cl.menu__email}>Oleg@gmail.com</p>
                </div>
            </div>
            <div className={cl.menu__item}>
                <img src={profileDefault} alt="#"/>
                <span>Світла</span>
            </div>

        </div>
    );
};

export default HeaderMenu;