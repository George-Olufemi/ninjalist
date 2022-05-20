import Head from "next/head";

function Ninjas() {
    return (
        <>
            <Head>
                <title>Ninjalist | Home</title>
                <meta name="content" keywords="george olufemi, ninja, next.js" />
            </Head>
            <div>
                    <div className="px-8">
                        <h1 className="text-3xl font-thin pb-10 px-9 pt-5">All Ninjas</h1>
                    </div>
            </div>
        </>
     );
}

export default Ninjas;