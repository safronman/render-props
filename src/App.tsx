import React from 'react';
import './App.css';
import { First } from './components/First/First';
import { Second } from './components/Second/Second';
import { A } from './components/A';
import { B } from './components/B';


export type RenderPropsType = {
    on: boolean
    toggleHandler: () => void
}

function App() {

    return (
        <div className="App">
            <h1>RENDER PROPS</h1>
            <hr/>

            <First render={ (props: RenderPropsType) => {
                return (
                    <A on={ props.on } toggleHandler={ props.toggleHandler }/>
                )
            } }/>


            <First render={ (props: RenderPropsType) => {
                return (
                    <B on={ props.on } toggleHandler={ props.toggleHandler }/>
                )
            } }/>

            <hr/>

            <Second render={ (name) => name }/>

        </div>
    );
}

export default App;
