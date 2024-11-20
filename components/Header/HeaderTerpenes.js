'use client';
import HeaderTop from '@/components/Header/elements/HeaderTop';
import MiniCart from '@/components/Header/elements/MiniCart';
import MobileMenu from '@/components/Header/elements/MobileMenu';
import NavigationTerpenes from '@/components/Header/elements/NavigationTerpenes';
import SearchOverlay from '@/components/Header/elements/SearchOverlay';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {IoIosMenu, IoIosSearch} from 'react-icons/io';
import {useSelector} from 'react-redux';

const HeaderTerpenes = ({navPositionClass, categoryList, isLoggedIn, authToken}) => {
  const [scroll, setScroll] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [offCanvasSearchActive, setOffCanvasSearchActive] = useState(false);
  const [offCanvasMobileMenuActive, setOffCanvasMobileMenuActive] = useState(false);
  const {cartItems} = useSelector((state) => state.cart);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  useEffect(() => {
    const header = document.querySelector('.header-wrap');
    setHeaderHeight(header.offsetHeight);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  return (
    <header className={clsx('header-wrap header-with-topbar', scroll > headerHeight && 'is-sticky')}>
      {/* header top */}
      <HeaderTop isLoggedIn={isLoggedIn} authToken={authToken}/>

      <div className='bottom-header dark-skin'>
        <Container>
          <div className='bottom-header-container d-flex justify-content-between align-items-center position-relative'>
            {/* logo */}
            <Link href='/' className='navbar-brand'>
              <Image width={225} height={48} className='logo-light' src='/assets/images/logo_light.png' alt='logo'/>
              <Image width={225} height={48} className='logo-dark' src='/assets/images/logo_dark.png' alt='logo'
                     priority/>
            </Link>

            {/*/!* navigation *!/*/}
            <NavigationTerpenes positionClass={navPositionClass} categories={categoryList}/>

            {/* icons */}
            <ul className='header-icons d-flex'>
              <li className='d-none d-lg-block position-relative'>
                <Link href='/other/cart' className='nav-link mini-cart-trigger pe-3 pe-lg-0' prefetch={false}>
                  <AiOutlineShoppingCart/>
                  {cartItems.length > 0 ? <span className='cart-count'>{cartItems.length}</span> : ''}
                </Link>
                {/* mini cart */}
                {/*<MiniCart cartItems={cartItems}/>*/}
              </li>

              <li className='d-block d-lg-none position-relative'>
                <Link href='/other/cart' className='nav-link mini-cart-trigger pe-3 pe-lg-0' prefetch={false}>
                  <AiOutlineShoppingCart/>
                  {cartItems.length > 0 ?
                    <span className='cart-count cart-count--mobile'>{cartItems.length}</span> : ''}
                </Link>
              </li>
              <li className='d-block d-lg-none'>
                <button
                  className='nav-link mobile-menu-trigger pe-0'
                  onClick={() => {
                    setOffCanvasMobileMenuActive(true);
                  }}>
                  <IoIosMenu/>
                </button>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      {/* search overlay */}
      <SearchOverlay activeStatus={offCanvasSearchActive} getActiveStatus={setOffCanvasSearchActive}/>

      {/* mobile menu */}
      <MobileMenu activeStatus={offCanvasMobileMenuActive} getActiveStatus={setOffCanvasMobileMenuActive}
                  categories={categoryList}/>
    </header>
  );
};

export default HeaderTerpenes;
