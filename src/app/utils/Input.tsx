import React, { ChangeEvent } from 'react'

interface InputProps {
    text: string
    type: string
    maxLength?: number
    minLength?: number
    value?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
    text,
    type,
    maxLength,
    minLength,
    value,
    onChange
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event)
        }
    }

    return (
        <input
            className="p-3"
            type={type}
            placeholder={text}
            value={value}
            maxLength={maxLength}
            minLength={minLength}
            onChange={handleChange}
        />
    )
}

export default Input
