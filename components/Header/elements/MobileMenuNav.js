"use client"
import {useEffect} from "react";
import Link from "next/link";
import {IoIosArrowForward} from "react-icons/io";

import {useDispatch, useSelector} from "react-redux";
import {usePathname} from "next/navigation";
import {clearAuth} from "@/store/slices/auth-slice";
import {router} from "next/client";


const MobileMenuNav = ({getActiveStatus, categories}) => {
  const {wishlistItems} = useSelector((state) => state.wishlist);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const isLoggIn = useSelector((state) => state.auth.isLoggedIn);

  const isActiveLink = (href) => {
    return pathname === href || pathname.startsWith(href);
  };
  const isActiveSubLink = (href) => {
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const signout = async () => {
    dispatch(clearAuth());
    try {
      const res = await fetch(`/api/auth/signout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {

        await router.push('/auth/login'); // Redirect to a protected route
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Failed to form', error);
    }
  };


  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="">
          <Link href='/' className={`nav-link ${isActiveLink("/") ? "header-categories-active" : ""}`}
                prefetch={false}>
            Home
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="/products" prefetch={false}>
            Products
          </Link>
          <ul className="mobile-sub-menu">
            {!!categories &&
              categories?.map((category, index) => (
                <li key={index}>
                  <Link
                    className={`${isActiveSubLink(`/products/category/${category?.slug?.replace(/\s+/g, '-')}`) ? 'text-primary' : ""}`}
                    href={`/products/category/${category?.slug?.replace(/\s+/g, '-')}`}>
                    {category?.name} <IoIosArrowForward/>
                  </Link>
                </li>
              ))}
          </ul>
        </li>

        <li className='has-children-mega'>
          <Link
            href={user?.role === 'wholesaler' ? '/wholesale/store' : '/wholesale'}
            className={`nav-link ${isActiveLink(user?.role === 'wholesaler' ? "/wholesale/store" : "/wholesale") ? "header-categories-active" : ""}`}
            prefetch={false}
          >
            Wholesale
          </Link>
        </li>

        <li className='has-children-mega'>
          <Link href='/other/about-us'
                className={`nav-link ${isActiveLink("/other/about-us") ? "header-categories-active" : ""}`}
                prefetch={false}>
            About Us
          </Link>
        </li>
        <li>
          <Link href='/blogs' className={`nav-link ${isActiveLink("/blogs") ? "header-categories-active" : ""}`}
                prefetch={false}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href='/other/faq' className={`nav-link ${isActiveLink("/other/faq") ? "header-categories-active" : ""}`}
                prefetch={false}>
            Faq
          </Link>
        </li>
        <li>
          <Link href='/other/contact-us'
                className={`nav-link ${isActiveLink("/other/contact-us") ? "header-categories-active" : ""}`}
                prefetch={false}>
            Contact
          </Link>
        </li>

        <li>
          <Link href='/my-account/wishlist' className='nav-link'>
            <span>Wishlist {wishlistItems?.length > 0 && (
              <span
                className='wishlist-count start-100 translate-middle badge rounded-circle bg-danger'> {wishlistItems.length} </span>
            )}</span>
          </Link>
        </li>

        <li>
          {isLoggIn ? (
            <>
              <Link href={'/my-account'} prefetch={false}>
                {/*<AiOutlineUser/>*/}
                <span>{user.name} </span>
              </Link>
              <button onClick={signout}
                      className='radius-btn w-30 border-0 px-3 py-1 my-4 btn-radius staggered-animation custom-btn'>Logout
              </button>
            </>
          ) : (
            <Link href='/auth/login' prefetch={false}>
              {/*<AiOutlineUser/>*/}
              <span>Login</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenuNav;
