import {IoIosClose} from "react-icons/io";
import clsx from "clsx";
import MobileMenuSearch from "./MobileMenuSearch";
import MobileMenuNav from "./MobileMenuNav";
import MobileMenuWidgets from "./MobileMenuWidgets";

const MobileMenu = ({activeStatus, getActiveStatus, categories}) => {
  return (
    <div className={clsx("offcanvas-mobile-menu", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose/>
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile search */}
            <MobileMenuSearch getActiveStatus={getActiveStatus}/>

            {/* mobile nav menu */}
            <MobileMenuNav getActiveStatus={getActiveStatus} categories={categories}/>
            {/* mobile widgets */}
            <MobileMenuWidgets/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
