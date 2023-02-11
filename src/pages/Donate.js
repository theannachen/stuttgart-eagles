import "./Donate.css";
import "./Pages.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Donate = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <div className="bodyParagraph">
          <h1>Donate</h1>
          <p>
            Our team relies on your generous donations. Please use one of the
            following methods to donate:
          </p>
        </div>
        <div className="donate-list">
          <h3>Cash</h3>
          <ul>
            <li>Dollars and Euro can be used for payment.</li>
            <li>Cash will be collected at organized payment events.</li>
            <li>
              Ensure that you get a receipt or annotated the day and amount you
              paid.
            </li>
          </ul>
          <h3>Checks</h3>
          <ul>
            <li>
              Make checks to “Stuttgart Eagles” and annotate in the memo Team
              and Player’s name.
            </li>
            <li>
              Checks can be collected at any time but primarily on the organized
              payment events.
            </li>
          </ul>
          <h3>Direct Deposit</h3>
          <ul>
            <li>
              Go to any Community Bank location (Kelley, Patch and Panzer) and
              deposit cash or check directly into the Stuttgart Eagles account.
              NOTE: Use the US dollars account information to deposit Dollars
              and use the EURO account information to deposit Euros.
            </li>
            <li>US Dollar account number: 3682098958</li>
            <li>Euro account number: 0015506681</li>
            <li>On the deposit slip annotate Team and Players’ name.</li>
          </ul>
          <h3>EFT</h3>
          <ul>
            <li>
              You can directly deposit money from your bank account to the
              Stuttgart Eagles account. NOTE: Use the US dollars account
              information to deposit Dollars and use the EURO account
              information to deposit Euros.
            </li>
            <li>
              If a name is requested use Huntley Guthrie or Shawn Gilliland.
            </li>
            <li>US Dollar routing number: 015005504</li>
            <li>US Dollar account number: 3682098958</li>
            <ul>
              <li>
                For US accounts it may take 3 business days for the Stuttgart
                Eagles account to be verified by your bank before you can make
                the deposit.
              </li>
              <li>If available please annotate the Team and Player’s name.</li>
            </ul>
            <li>EURO IBAN number: DE29501109000015506681</li>
            <li>EURO BIC: MNBIDEF1</li>
            <ul>
              <li>
                On the reference line annotate the Team and Player’s name.
              </li>
            </ul>
          </ul>
          <h3>Credit Card via Invoice</h3>
          <ul>
            <li>
              Please inform Shawn Gilliland (email: Skg2415@yahoo.com or
              stuttgarteaglesfinance@gmail.com) and he will send you an invoice
              to your email via Sum-up requesting a credit card payment.
            </li>
            <li>
              For this service there is a 4% service charge added to the amount.
            </li>
          </ul>
          <h3>Peer-to-Peer Payments (PayPal, Zelle, etc)</h3>
          <ul>
            <li>
              NOTE: Do not use a credit card on PayPal, due to high service
              fees, to make payments on the Peer-to-Peer network.
            </li>
            <li>
              Please let Shawn Gilliland know that you want to use this option
              (email: Skg2415@yahoo.com or Stuttgarteaglesfinance@gmail.com).
            </li>
            <li>
              Shawn Gilliland will send you a payment request for your payment.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
