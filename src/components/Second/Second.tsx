import React from 'react'

type PropsType = {
    render: (name: string) => string
}

export const Second = (props: PropsType) => {
    return (
        <h1>{ props.render('Bob') }</h1>
    )
}
