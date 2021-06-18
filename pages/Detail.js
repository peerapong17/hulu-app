import DetailScreen from "../components/DetailScreen"


export async function getServerSideProps(context) {
    const { id } = context.query
    console.log(context)
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=278956e0bc226fb6dcc950ed4e32f4ca&language=en-US`
    )
        .then((res) => res.json())

    return {
        props: {
            data
        }
    }
}

function Detail({ data }) {
    console.log(data)
    return (
        <div>
            <DetailScreen data={data} />
        </div>
    )
}

export default Detail
