import "../src/commonResource/css/bootstrap.css"; //if i want use but if i use jquery it is recommeded to use react bootstraps
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header/Header";
import Alerts from "../components/mainSec/Alerts";
import Ipadpro from "../components/mainSec/Ipadpro";
import Macbookair from "../components/mainSec/Macbookair";
import Footer from "../components/Footer/Footer";
import Iphone11 from "../components/mainSec/Iphone11";
import Iphoneapple from "../components/mainSec/Iphoneapple";
import Tvwatchwrapper from "../components/mainSec/Tvwatchwrapper";
import Spiderapple from "../components/mainSec/Spiderapple";

function App() {
  return (
    <>
      <Header />
      <Alerts />
      <Ipadpro />
      <Macbookair />
      <Iphone11 />
      <Iphoneapple />
      <Tvwatchwrapper />
      <Spiderapple />
      <Footer />
    </>
  );
}

export default App;
