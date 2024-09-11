import ProductMini from "../ProductMini";

const data = [
  {
    image: "products-1.png",
    reverse: false,
    logos: true,
    heading: "Kite",
    links: true,
    discription:
      "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
  },
  {
    image: "products-2.png",
    reverse: true,
    logos: false,
    heading: "Console",
    links: true,
    discription:
      "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
  },
  {
    image: "products-3.png",
    reverse: false,
    logos: true,
    heading: "Coin",
    links: true,
    discription:
      "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
  },
  {
    image: "products-4.png",
    reverse: true,
    logos: false,
    heading: "Kite Connect API",
    links: true,
    discription:
      "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
  },
  {
    image: "products-5.png",
    reverse: false,
    logos: true,
    heading: "Varsity mobile",
    links: false,
    discription:
      "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
  },
];

const Products = () => {
  return (
    <>
      <div className="w-full main">
        <div className="w-4/5 mx-auto flex justify-center flex-col gap-5  items-center h-96  border-b-2 border-slate-200">
          <h1 className="text-5xl font-semibold text-center">Technology</h1>
          <p className="text-xl text-center">
            Now, we are breaking ground with our technology.
          </p>
          <p>
            Check out our{" "}
            <span className="text-blue-600"> investment offerings →</span>
          </p>
        </div>

        <div className="">
          {data.map((item, index) => {
            return (
              <ProductMini
                key={index}
                image={item.image}
                reverse={item.reverse}
                logos={item.logos}
                heading={item.heading}
                link={item.links}
                discription={item.discription}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
