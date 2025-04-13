import duck from '/src/assets/duckMe.png'
import './App.css'

function App() {

    return (
        <>
            <div className="main-container">
                <div className="space">
                </div>
                <div className="home">
                    <div className="name">
                        <h1>Archie Zeki</h1>
                        <div className="flex flex-col gap-8">
                                  <span
                                      className="title text-[90px] font-extrabold leading-none tracking-wide text-primary-light dark:text-primary-dark whitespace-pre-line">
                                    Java/Kotlin Developer
                                  </span>
                        </div>
                    </div>
                    <div className="pic">
                        <a href="/src/assets/duckMe.png">
                            <img src={duck} className="me" alt="Me"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
