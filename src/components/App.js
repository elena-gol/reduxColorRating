import React from "react";
import { NewColorFormContainer } from "../containers/NewColorFormContainer.js";
import { ColorListContainer } from "../containers/ColorListContainer.js";
import SortContainer from "../containers/SortContainer.js";

const App = () => {
    return (
            <div className="app">
                <h1>Rating of Colors</h1>
                <NewColorFormContainer />
                <SortContainer />
                <ColorListContainer />
            </div>
    );
}

export default App;