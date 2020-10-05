import React, { ReactNode, useState } from 'react'
import { RenderPropsType } from '../../App';


type PropsType = {
    render: (params: RenderPropsType) => ReactNode
}


export const First = (props: PropsType) => {

    const [on, setOn] = useState(false)

    const toggleHandler = () => {
        setOn(!on)
    }

    return (
        <>
            { props.render({on, toggleHandler}) }
        </>
    )
}
