"use client"
import {IoIosSearch} from "react-icons/io";
import {useRef} from "react";
import {useRouter} from "next/navigation";

const MobileMenuSearch = ({getActiveStatus}) => {
  const inputRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      router.push(`/search?query=${inputValue}`);
    }
    getActiveStatus(false)
    inputRef.current.value = null
  };
  return (
    <div className="offcanvas-mobile-menu__search">
      <form>
        <input type="search" placeholder="Search here" ref={inputRef}/>
        <button type='button'
                onClick={handleSearch} className='btn icon-search'>
          <IoIosSearch/>
        </button>
      </form>
    </div>
  );
};

export default MobileMenuSearch;
