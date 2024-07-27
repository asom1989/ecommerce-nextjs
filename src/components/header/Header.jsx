import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import {
  faBagShopping,
  faCartShopping,
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Header() {
  return (
    <header id="headerElement" className="flex">
      <div className="logo">
        <FontAwesomeIcon
          className="fa-solid fa-bag-shopping"
          style={{ width: "1.5rem", marginRight: "0.3rem" }}
          icon={faBagShopping}
        />
        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </div>

      <nav className="links">
        <Link style={{ position: "relative" }} className="cart" href="/cart">
          <FontAwesomeIcon
            className="fa-solid fa-cart-shopping"
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            icon={faCartShopping}
          />
          $0.00
          <span className="products-number">2</span>
        </Link>

        <Link className="sign-in" href="/signin">
          <FontAwesomeIcon
            className="fa-solid fa-right-to-bracket"
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            icon={faRightToBracket}
          />
          Sign in
        </Link>

        <Link className="register" href="/register">
          <i className="fa-solid fa-user-plus" />
          <FontAwesomeIcon
            className="fa-solid fa-user-plus"
            style={{ width: "0.8rem", marginRight: "0.3rem" }}
            icon={faUserPlus}
          />
          Register
        </Link>
      </nav>
    </header>
  );
}
