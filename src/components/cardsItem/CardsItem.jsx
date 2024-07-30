import Link from "next/link";
import "./cardsItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

async function getData() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function CardsItem() {
  const data = await getData();

  return (
    <section className="products flex">
      {data.map((item) => (
        <article title={item.title} className="card" key={item.id}>
          <Link href={`/product-details/${item.id}`}>
            {/* <img width={266} src={src} alt={title} srcSet="" /> */}
            <Image src={item.image} width={266} height={280} alt={item.title} />
          </Link>
          <div style={{ width: 266 }} className="content">
            <h1 className="title">{item.title.slice(0, 15)}...</h1>
            <p className="description">{item.description.slice(0, 100)}...</p>
            <div
              className="flex"
              style={{
                justifyContent: "space-between",
                paddingBottom: "0.7rem",
              }}
            >
              <div className="price">${item.price}</div>
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
      ))}
    </section>
  );
}
