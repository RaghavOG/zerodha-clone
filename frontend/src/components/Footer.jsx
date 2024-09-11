const Footer = () => {
    return (
      <div className="w-full bg-gray-100  py-12 px-6">
        <div className="w-4/5 mx-auto flex flex-col mb-10">
          {/* Upper Footer */}
          <div className="flex flex-col md:flex-row justify-evenly items-start mb-16">
            <div className="flex flex-col items-start mb-8 md:mb-0">
              <img src="logo.svg" alt="Logo" className="w-56" />
              <p className="text-sm text-slate-400 mt-3">© 2010 - 2024, Zerodha Broking Ltd.</p>
              <p className="text-sm text-slate-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
              <h2 className="font-semibold text-2xl mb-4">Company</h2>
              <p className="text-sm">About</p>
              <p className="text-sm">Products</p>
              <p className="text-sm">Pricing</p>
              <p className="text-sm">Careers</p>
              <p className="text-sm">Referral Program</p>
              <p className="text-sm">Zerodha.tech</p>
              <p className="text-sm">Press & Media</p>
              <p className="text-sm">Zerodha Cares (CSR)</p>
            </div>
            <div className="flex flex-col gap-4 mb-8 md:mb-0">
              <h2 className="font-semibold text-2xl mb-4">Support</h2>
              <p className="text-sm">Contact Us</p>
              <p className="text-sm">Support Portal</p>
              <p className="text-sm">Z-Connect Blog</p>
              <p className="text-sm">List of Charges</p>
              <p className="text-sm">Downloads & Resources</p>
              <p className="text-sm">Videos</p>
              <p className="text-sm">Market Overview</p>
              <p className="text-sm">How to File a Complaint?</p>
              <p className="text-sm">Status of Your Complaints</p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-2xl mb-4">Account</h2>
              <p className="text-sm">Open an Account</p>
              <p className="text-sm">Fund Transfer</p>
            </div>
          </div>
          {/* Lower Footer */}
          <div className="flex flex-col gap-4 text-sm text-slate-400">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSE, and MCX SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSDL: 0001 SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related complaints to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF.
            </p>
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of grievances.
            </p>
            <p className="text-blue-500 cursor-pointer">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p>
              Investments in securities market are subject to market risks; read all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create a pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p className="mb-6">
            &quot;Prevent unauthorized transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is a one-time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.&quot; Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment, the funds will remain in your bank account. As a business we don&apos;t give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  