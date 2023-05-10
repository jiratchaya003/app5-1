import React from "react"
import Route from "./route"
import { userContext } from "./context"

function App() {
 return (
    <userContext.Provider value={'jiratchaya'}>
    <Route />
    </userContext.Provider>
 )
}

export default App;