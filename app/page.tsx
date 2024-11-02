import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Book from "./components/Book";
import Destination from "./components/Destination";
import Ticket from "./components/Ticket";
import Gallery from "./components/Gallery";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
function page() {
 
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Book></Book>
      <Destination></Destination>
      <Ticket></Ticket>
      <Gallery></Gallery>
      <Ending></Ending>
      <Footer></Footer>
    </div>
  )
}

export default page;