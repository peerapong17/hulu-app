import Thumbnail from './Thumbnail'

export default function Result({ results }) {
  return (
    <div  className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      {results.map((result) => {
        console.log(result)
        return <Thumbnail {...result} key={result.id} />
      })}
    </div>
  )
}


