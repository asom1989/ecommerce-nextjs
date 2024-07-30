import "./product-details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 20 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    notFound();
  }

  return res.json();
}

// dynamic metadata
export async function generateMetadata({ params }) {
  const objData = await getData(params.id);
  return {
    title: objData.title,
    description: objData.description,
  };
}

const Page = async ({ params }) => {
  const objData = await getData(params.id);
  // console.log(objData);

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        alignItems: "center",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Header />

      <main style={{ textAlign: "center" }} className="flex">
        <Image
          width={250}
          height={250}
          alt={objData.title}
          src={objData.image}
        />
        <div className="product-details">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <h2>{objData.title}</h2>
            <p className="price">${objData.price}</p>
          </div>
          <p className="description">{objData.description}</p>
          <button className="flex add-to-cart">
            <FontAwesomeIcon style={{ width: "1.1rem" }} icon={faCartPlus} />
            Add To Cart
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
