import React from 'react';
import { RenderPropsType } from '../App';

export const B = (props: RenderPropsType) => {
    return (
        <div>
            <h2>{ props.on ? 'On' : 'Off' }</h2>
            <h3>new text</h3>
            <button style={ {backgroundColor: 'blue', color: 'white'} }
                    onClick={ props.toggleHandler }>toggle
            </button>
        </div>
    )
}
