const ProductMini = ({ image, reverse, logos, heading, link, discription }) => {
    return (
      <div className="w-full py-8">
        <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} justify-between items-center w-3/5 mx-auto`}>
          <img src={image} alt="Product" className="object-contain " />
          <div className="flex flex-col m-16 py-1">
            <h2 className="text-4xl font-semibold mb-4 ">{heading}</h2>
            <p className="text-base text-gray-700 mb-4">{discription}</p>
            {link && <a href={link} className="text-blue-600 hover:underline mb-4 block">Read more</a>}
            {logos && (
              <div className="flex mt-4 space-x-4">
                <img src="appstore-badge.svg" alt="App Store" className="w-24 h-auto" />
                <img src="google-play-badge.svg" alt="Google Play" className="w-24 h-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductMini;
  