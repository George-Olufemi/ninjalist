import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Ninjas() {
    return ( 
        <div>
            <Navbar />
                <div className="px-8">
                    <h1 className="text-3xl font-thin pb-10 px-9 pt-5">All Ninjas</h1>
                </div>
            <Footer />
        </div>
     );
}

export default Ninjas;