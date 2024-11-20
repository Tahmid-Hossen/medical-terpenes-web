'use client';
import clsx from 'clsx';
import Link from 'next/link';
import {IoIosArrowDown, IoIosArrowForward} from 'react-icons/io';
import {useSelector} from 'react-redux';
import {usePathname} from "next/navigation";


const NavigationTerpenes = ({positionClass, categories}) => {
  // const {products} = useSelector((state) => state.product);
  const {user} = useSelector((state) => state.auth);
  const pathname = usePathname();
  const isActiveLink = (href) => {
    return pathname === href || pathname.startsWith(href);
  };
  const isActiveSubLink = (href) => {
    return pathname.startsWith(href);
  };

  // console.log("isWholesaler", user)

  return (
    <nav className='navigation d-none d-lg-block text-uppercase'>
      <ul className={clsx('d-flex', positionClass ? positionClass : 'justify-content-end')}>
        <li>
          <Link href='/products' className={`nav-link ${isActiveLink("/products") ? "header-categories-active" : ""}`}
                prefetch={false}>
            Products <IoIosArrowDown/>
          </Link>

          <ul className='sub-menu sub-menu--one-column'>
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
            BLOGS
          </Link>
        </li>
        <li>
          <Link href='/other/faq' className={`nav-link ${isActiveLink("/other/faq") ? "header-categories-active" : ""}`}
                prefetch={false}>
            FAQ
          </Link>
        </li>
        <li>
          <Link href='/other/contact-us'
                className={`nav-link ${isActiveLink("/other/contact-us") ? "header-categories-active" : ""}`}
                prefetch={false}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTerpenes;
