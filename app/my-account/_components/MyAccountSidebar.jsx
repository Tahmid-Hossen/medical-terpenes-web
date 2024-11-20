"use client"
import MyProfilePreview from "@/app/my-account/_components/MyProfilePreview";
import { clearAuth } from "@/store/slices/auth-slice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {
  RiCompass3Line, RiHeart3Line,
  RiHome4Line,
  RiLogoutBoxRLine,
  RiMapPinLine,
  RiShoppingBasketLine,
  RiUserLine
} from "react-icons/ri";
import { useDispatch } from "react-redux";

const menuItems = [
  {
    title: "Dashboard",
    icon: RiHome4Line,
    slug: "dashboard",
  },
  {
    title: "My Orders",
    icon: RiShoppingBasketLine,
    slug: "my-orders",
  },
  {
    title: "Order Track",
    icon: RiCompass3Line,
    slug: "order-track",
  },
  {
    title: "Personal Info",
    icon: RiUserLine,
    slug: "personal-info",
  },
  {
    title: "Address Book",
    icon: RiMapPinLine,
    slug: "address-book",
  },
  {
    title: "Wishlist",
    icon: RiHeart3Line,
    slug: "wishlist",
  },
  // {
  //   title: "Order Details",
  //   icon: RiMapPinLine,
  //   slug: "order-details",
  // },

];

const MyAccountSidebar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();


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

        router.push('/auth/login'); // Redirect to a protected route
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Failed to form', error);
      // Show error message to the user
    }
  };
  return (
    <Col lg={3} md={4} style={{background: "#f9f9f9"}}>
      <MyProfilePreview/>
      <Nav variant="pills" className="flex-column my-account-content__navigation space-mb--r60">
        {menuItems.map((item, index) => {
          const isActive = pathname === `/my-account/${item.slug}`;

          return (
            <Nav.Item key={index}>
              <Link
                href={`/my-account/${item.slug}`}
                className={`d-flex align-items-center p-2 py-3 ${isActive ? 'my-account-active' : ''}`} // Add active class
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <item.icon style={{marginRight: '8px'}}/>
                <span>{item.title}</span>
              </Link>
            </Nav.Item>
          );
        })}
        <Nav.Item>
          <a
            onClick={signout}
            className="d-flex align-items-center p-2"
            style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}
          >
            <RiLogoutBoxRLine style={{marginRight: '8px'}}/>
            <span>Logout</span>
          </a>
        </Nav.Item>
      </Nav>
    </Col>
  );
};

export default MyAccountSidebar;