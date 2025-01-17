import { useEffect, useState } from 'react'

function GitHub() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/Rishi2600")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setData(data)   //The data which has been given to the console, same data will be passed as the new state variable & will keep changing,
        })                  //this is the same data that will be fetched below by this component, state will change component will re-render.
    }, [])

  return (
    <div className='text-center m-4 bg-grey-600 text-white p-4 text-3xl'>
        GitHub
        <div className='text-center m-3 bg-grey-500 text-white p-4 text-2xl'>
            Github Followers: {data.followers}
        </div>
    </div>
  )
}

export default GitHub