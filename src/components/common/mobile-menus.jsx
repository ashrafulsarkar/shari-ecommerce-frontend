import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { mobile_menu } from "@/data/menu-data";

const MobileMenus = () => {
  const [isActiveMenu,setIsActiveMenu] = useState("")

  // handleOpenSubMenu
  const handleOpenSubMenu = (title) => {
    if(title === isActiveMenu){
      setIsActiveMenu("")
    }
    else {
      setIsActiveMenu(title)
    }
  }
  return (
    <>
      <nav className="tp-main-menu-content">
        {mobile_menu.map((menu, i) => (
          <ul key={i}>
            {menu.homes ? (
              <li className={`has-dropdown has-mega-menu ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                <a className={`${isActiveMenu === menu.title ? 'expanded':''}`}>
                  Home
                  <button onClick={()=> handleOpenSubMenu(menu.title)} className={`dropdown-toggle-btn ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </a>
                <div className={`home-menu tp-submenu tp-mega-menu ${isActiveMenu === menu.title ? 'active':''}`}>
                  <div className="row row-cols-1 row-cols-lg-4 row-cols-xl-5">
                    {menu.home_pages.map((home, i) => (
                      <div key={i} className="col">
                        <div className="home-menu-item">
                          <Link href={home.link}>
                            <div className="home-menu-thumb p-relative fix">
                              <Image src={home.img} alt="home img" width={'auto'} height={'auto'} />
                            </div>
                            <div className="home-menu-content">
                              <h5 className="home-menu-title">{home.title}</h5>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ) : menu.sub_menu ? (
              <li key={menu.id} className={`has-dropdown ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                <a className={`${isActiveMenu === menu.title ? 'expanded':''}`}>
                  {menu.title}
                  <button onClick={()=> handleOpenSubMenu(menu.title)} className={`dropdown-toggle-btn ${isActiveMenu === menu.title ? 'dropdown-opened':''}`}>
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </a>
                <ul className={`tp-submenu ${isActiveMenu === menu.title ? 'active':''}`}>
                  {menu.sub_menus.map((b, i) => (
                    <li key={i}>
                      <Link href={b.link}>{b.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={menu.id}>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}
          </ul>
        ))}
      </nav>
    </>
  );
};

export default MobileMenus;
