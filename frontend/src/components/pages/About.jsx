const About = () => {
  return (
   <>
   <div className="w-full">
    <div className="w-4/5 mx-auto flex justify-center flex-col gap-1 font-semibold items-center h-96  border-b-2 border-slate-200">
    <h1 className="text-4xl text-center">We pioneered the discount broking model in India. </h1>
    <h1 className="text-4xl text-center">Now, we are breaking ground with our technology.</h1>
    </div>
    <div className="flex justify-evenly items-center w-4/5 mx-auto my-12">
      <div className="left w-1/2 flex flex-col text-start gap-5 p-16  mx-16 text-[18px] h-full items-start">
        <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and , the Sanskrit word for barrier.</p>
        <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
        <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
      </div>
      <div className="right w-1/2 flex flex-col text-start gap-5 p-16 text-[18px] h-full">
        <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
        <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
        <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
      </div>
    </div>

    
   </div>

   
   </>
  )
}

export default About