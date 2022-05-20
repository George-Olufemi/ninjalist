import Head from 'next/head';

// export const getStaticPaths = async () => {
//     const path = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     const paths = data.map(ninja => {
//         return {
//             params: { id: ninja.id.toString() }
//         }
//     })
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const response = await fetch('https://jsonplaceholder.typicode.com/users' + id);
//     const data = await response.json();
//     return {
//         props: { ninja: data }
//     }
// }

function Details() {
    return ( 
        <>
        <Head>
            <title>Ninjalist</title>
            <meta name="content" keywords="george olufemi, ninja, next.js" />
        </Head>
        <div>
            <h1 className="text-3xl font-thin pb-10 px-16 pt-5">Details Page</h1>
            <h1 className="text-3xl font-thin pb-10 px-16 text-center">Leanne Graham</h1>
            <h1 className="text-3xl font-thin pb-10 px-16 text-center">Sincere@april.biz</h1>
            <h1 className="text-3xl font-thin pb-10 px-16 text-center">Apt. 556, Kulas Light, Gwenborough</h1>
        </div>
        </>
    );
}

export default Details;