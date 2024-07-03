import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Nike from './Nike.js';
import logo from './Images/logo.png';
import slider1 from './Images/slider1.jpg';
import slider2 from './Images/slider2.jpg';
import banner3 from './Images/banner3.jpg';
import banner2 from './Images/banner2.jpg';
import br1 from './Images/br1.png';
import br2 from './Images/br2.png';
import br3 from './Images/br3.png';
import br4 from './Images/br4.png';
import br5 from './Images/br5.png';
import br6 from './Images/br6.png';
import paypal from './Images/paypal.png';

function App() {

  const shoesInfo = [
    {
      logo:logo,
      simg1: slider1,
      stitle1: "Soil Carbon",
      stext1: "Coalition shoes",
      spara1: "- Shop the collection & make part of your style.",
      simg2: slider2,
      stitle2: "Nike Air Max",
      stext2: "Run don't hide",
      spara2: "- Style that rises to make every eye fall.",
      sbtn: "Shop Now",
      mensimg: banner3,
      menstitle: "Men's Collection",
      menspara: "Shop All Products",
      womensimg: banner2,
      womenstitle: "Women's Collection",
      womenspara: "Shop All Products",
      sellertitle: "The Top Sellers",
      sellerbtn: "Show All Products",
      d1: "Special Running Shoes",
      d2: "Air Jordan 5 Retro",
      dbtn: "Discover Now",
      img1: br1,
      img2: br2,
      img3: br3,
      img4: br4,
      img5: br5,
      img6: br6,
      f11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus.",
      f12: "Address: 4710-4890 Breckinridge St, Fayettevill",
      f13: "Call Us: (+800) 345 678, (+800) 123 456",
      f14: "Email: support@domain.com",
      f21: "Information",
      f22: "Delivery Information",
      f23: "Privacy Policy",
      f24: "Terms & Conditions",
      f25: "Contact Us",
      f26: "Contact",
      f31: "Contact",
      f32: "My Account",
      f33: "Order History",
      f34: "Wishlist",
      f35: "Privacy Policy",
      f36: "Frequently Questions",
      f41: "Sign Up For Newsletters",
      f42: "Be the First to Know. Sign up for newsletter today !",
      copy: "© Copyright 2024 Shoes - All Rights Reserved - Powered by WooVina Theme.",
      copyimg: paypal
    }
  ]
  return (
    <div className="App">
      <Nike info={shoesInfo[0]}/>
    </div>
  );
}

export default App;
