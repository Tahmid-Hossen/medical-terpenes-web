"use client"
import {IoIosArrowForward} from "react-icons/io";
import Link from "next/link";
import {setActiveSort} from "@/lib/product";
import {usePathname} from "next/navigation";

const BrandsWidget = ({category}) => {
    const pathname = usePathname();
    const isActiveLink = (href) => {
        return pathname === href || pathname.startsWith(href);
    };
    const isActiveSubLink = (href) => {
        return pathname.startsWith(href);
    };
  return (
    <li className={""}>
      <Link className={`categories-name ${isActiveSubLink(`/products/category/${category?.slug?.replace(/\s+/g, '-')}`) ? "categories-active" : ""}`} href={`/products/category/${category?.slug?.replace(/\s+/g, '-')}`}>
        <IoIosArrowForward/> {category?.name} <span className="categories-num">({category?.productCount})</span>
      </Link>
    </li>
  );
};

export default BrandsWidget;
