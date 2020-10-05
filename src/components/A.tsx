import React from 'react';
import { RenderPropsType } from '../App';

export const A = (props: RenderPropsType) => {
    return (
        <div>
            <h1 style={ {color: 'green'} }>{ props.on ? 1 : 2 }</h1>
            <button onClick={ props.toggleHandler }>toggle</button>
        </div>
    )
}
