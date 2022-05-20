import Link from "next/link";

function Navbar() {
    return ( 
        <nav className="border-b-2 border-black pb-5 md:flex justify-between pt-5 px-16">
            <div className="">
                <h1 className="text-3xl font-thin pb-4">NinjaList</h1>
            </div>
            <div>
                <ul className="pr-5 pt-2 text-lg font-semibold">
                    <Link href='/'><a className="pr-5 hover:text-blue-700 font-thin">Home</a></Link>
                    <Link href='/about'><a className="pr-5 hover:text-blue-700 font-thin">About</a></Link>
                    <Link href='/ninjas'><a className="pr-5 hover:text-blue-700 font-thin">Ninja List</a></Link>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;