import duck from '/src/assets/duck.jpg'
import './App.css'

function App() {

    return (
        <>
            <div className="word">
                <div className="home">

                    <div>
                        <h1>Archie Zeki</h1>
                        <div className="">
                            <p className="text">
                                something something kotlin java something
                            </p>
                        </div>

                    </div>
                </div>


                <div className="home flex justify-between pic">
                    <a href="/src/assets/duck.jpg">
                        <img src={duck} className="logo" alt="Me"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default App
