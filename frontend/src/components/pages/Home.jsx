
const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full mt-16">
        <img src="landing.png" alt="" className="w-1/2" />
        <h1 className="bold text-5xl mt-12 text-[#424242] font-semibold">
          {" "}
          Invest in everything{" "}
        </h1>
        <p className="mt-6 text-xl ">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button className="mt-10 bg-blue-600 rounded py-3 text-white px-6">
          Sign Up Now
        </button>
      </div>
      <div className="flex mt-24 h-screen w-4/5 mx-auto">
        {/* Content Section */}
        <div className="flex flex-col justify-center items-center p-10  md:w-1/2 text-center md:text-left ">
          <h1 className="text-4xl font-semibold mb-6 text-left  w-full">
            Trust with Confidence
          </h1>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl  text-wrap font-semibold">
                Customer-First Always
              </h2>
              <p className="text-lg">
                That&apos;s why 1.5+ crore customers trust Zerodha with ₹4.5+
                lakh crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl  text-wrap font-semibold">
                No spam or gimmicks
              </h2>
              <p className="text-lg">
                No gimmicks, spam, &quot;gamification&quot;, or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl  text-wrap font-semibold">
                The Zerodha universe
              </h2>
              <p className="text-lg">
                Not just an app, but a whole ecosystem. Our investments in 30+
                fintech startups offer you tailored services specific to your
                needs.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl  text-wrap font-semibold">
                Do better with money
              </h2>
              <p className="text-lg">
                With initiatives like{" "}
                <span className="text-blue-600">Nudge</span> and{" "}
                <span className="text-blue-600">Kill Switch</span>, we
                don&apos;t just facilitate transactions, but actively help you
                do better with your money.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full md:w-1/2 p-10">
          <img
            src="/ecosystem.png"
            className="max-w-full h-auto"
            alt="Ecosystem"
          />
        </div>
      </div>
      {/* ========================== */}
      <div className="flex items-center justify-center my-28">
        <img src="press-logos.png" alt="" />
      </div>
      {/* ======================================================== */}
      <div className="flex flex-col md:flex-row justify-around items-center w-4/5 mx-auto rounded-lg p-8 mt-20 mb-20">
        <img
          src="index-education.svg"
          alt="Market Education"
          className="w-1/2 md:w-1/3 mb-6 md:mb-0"
        />

        <div className="flex flex-col items-center md:items-start text-center md:text-left ml-44 p-18">
          <h1 className="text-2xl   mb-4">Free and Open Market Education</h1>
          <div className="text-base  mb-6">
            <p className="mb-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <p className="text-blue-400 font-semibold">Varsity</p>
          </div>
          <div className="text-base ">
            <p className="mb-4">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <p className="text-blue-400 font-semibold">Varsity</p>
          </div>
        </div>
      </div>
      {/* ============================================================================= */}

      <div className="flex flex-col w-4/5 mx-auto items-center justify-center mb-24">
        <h1 className="bold text-5xl mt-12 text-[#424242] font-semibold">
          {" "}
          Open a Zerodha account{" "}
        </h1>
        <p className="mt-6 text-xl ">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="mt-10 bg-blue-600 rounded py-3 text-white px-6">
          Sign Up Now
        </button>
      </div>

    </>
  );
};

export default Home;
