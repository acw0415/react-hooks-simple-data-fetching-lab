import { React, useEffect, useState } from "react";

function App() {
    const [dogPic, setDogPic] = useState()

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setDogPic(data.message)
                console.log(data.status)
            })
    }, [])

    if (!dogPic) return <p>Loading...</p>

    else return (
        <div>
            <img src={dogPic} alt="A Random Dog"></img>
        </div>
    )
}

export default App;