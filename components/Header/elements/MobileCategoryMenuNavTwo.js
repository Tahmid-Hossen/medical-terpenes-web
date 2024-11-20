import { useEffect } from "react";
import Link from "next/link";

const MobileCategoryMenuNavTwo = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-category-menu__navigation"
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

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation space-mb--30"
      id="offcanvas-mobile-category-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/shop/terpenes">
            Computer
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                Featured Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                Popular Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/shop/terpenes">
            Mobile & Tablet
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                Featured Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                Popular Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                New Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/shop/terpenes">
            Camera
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                Featured Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link href="/shop/terpenes">
                Popular Item
              </Link>
              <ul className="mobile-sub-menu">
                <li>
                  <Link href="/shop/terpenes">
                    Curabitur tempus
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vivamus in tortor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae ante ante
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Etiam ac rutrum
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Vestibulum sed
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec porttitor
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Donec vitae facilisis
                  </Link>
                </li>
                <li>
                  <Link href="/shop/terpenes">
                    Quisque condimentum
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <Link href="/shop/terpenes">
            Accessories
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Clothing
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Shoes
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Watches
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Headphones
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Gaming
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Sports
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Watches
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Home Audio & Theater
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            TV & Smart Box
          </Link>
        </li>
        <li>
          <Link href="/shop/terpenes">
            Printer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileCategoryMenuNavTwo;
