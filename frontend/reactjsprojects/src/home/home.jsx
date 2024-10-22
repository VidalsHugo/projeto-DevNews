import { useParams } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import MainSection from "../components/main-section/main-section"

function Home() {
    const { category } = useParams()
    return (
        <div>
            <Header />
            <MainSection category={category} />
            <Footer />
        </div>

  );
  }
  
  export default Home;
  