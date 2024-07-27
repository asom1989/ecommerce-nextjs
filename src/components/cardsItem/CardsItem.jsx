import Link from "next/link";
import "./cardsItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function CardsItem({ title, src, price, key }) {
  return (
    <article className="card" key={key}>
      <Link href="/pages/product-details.html">
        {/* <img width={266} src={src} alt={title} srcSet="" /> */}
        <Image src={src} width={266} height={280} alt={title} />
      </Link>
      <div style={{ width: 266 }} className="content">
        <h1 className="title">{title}</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex tempore
          dolor in, accusantium laudantium accusamus.
        </p>
        <div
          className="flex"
          style={{
            justifyContent: "space-between",
            paddingBottom: "0.7rem",
          }}
        >
          <div className="price">${price}</div>
          <button className="add-to-cart flex">
            <i className="fa-solid fa-cart-plus" />
            <FontAwesomeIcon
              className="fa-solid fa-cart-plus"
              style={{ width: "0.8rem", marginRight: "0.3rem" }}
              icon={faCartPlus}
            />
            Add To Cart
          </button>
        </div>
      </div>
    </article>
  );
}
