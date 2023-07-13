import React from 'react'


interface ButtonProps {
    text: string
    color?: string
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
    return (
        <button className={'bg-primary text-white w-full p-4 ' + (color ? `bg-[${color}]` : '')}>{text}</button>
    )
}

export default Button