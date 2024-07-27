import CardsItem from "../components/cardsItem/CardsItem";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./home.css";
import { producuts } from "./data/product";

export default function Home() {
  const product = producuts.map((item) => (
    <CardsItem
      key={item.id}
      src={item.image}
      title={item.title}
      price={item.price}
    />
  ));
  return (
    <>
      <div className="top-img">
        <Header />
        <section className="content">
          <p className="lifestyle">Lifestyle collection</p>
          <p className="men">MEN</p>
          <p className="sale">
            SALE UP TO <span>30% OFF</span>
          </p>
          <p className="free-shipping">
            Get Free Shipping on orders over $99.00
          </p>
          <button>Shop Now</button>
        </section>
      </div>

      <main className="">
        <h1 className="recommended">
          <i className="fa-solid fa-check" />
          Recommended for you
        </h1>
        <section className="products flex">{product}</section>
      </main>
      <Footer />
    </>
  );
}
