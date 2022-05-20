import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return{
        props: { ninjas : data }
    }
}

function Ninjas({ ninjas }) {
    return (
        <>
            <Head>
                <title>Ninjalist</title>
                <meta name="content" keywords="george olufemi, ninja, next.js" />
            </Head>
            <div>
                    <div className="px-8">
                        <h1 className="text-3xl font-thin pb-10 px-9 pt-5">All Ninjas</h1>
                        {
                            ninjas.map((ninja) => (
                                <Link href={'/ninjas.' + ninja.id} key={ninja.id}>
                                    <div className="text-2xl font-thin text-center hover:border-l-4 border-blue-600">
                                        <h3 className="pb-1 pt-1">{ ninja.name }</h3>
                                        <h3 className="pb-1">{ ninja.email }</h3>
                                        <h3 className="border-b border-gray-200 pb-5">{ ninja.address.suite }, { ninja.address.street }, { ninja.address.city }</h3>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
            </div>
        </>
     );
}

export default Ninjas;