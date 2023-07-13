"use client"
import React from 'react'
import Button from '../utils/Button'
import Input from '../utils/Input'
import SectionTitle from './SectionTitle'


interface IdentifyProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setStatus: React.Dispatch<React.SetStateAction<boolean | 'disabled'>>
    showModal: boolean
    status?: boolean | 'disabled'
    setUser: React.Dispatch<React.SetStateAction<{
        email: string | null
        password: string | null
        name: string | null
        confirm_password: string | null
    }>>
    user: {
        email: string | null
        password: string | null
        name: string | null
        confirm_password: string | null
    }

}

const Identify: React.FC<IdentifyProps> = ({ setShowModal, setStatus, showModal, status, setUser, user }) => {

    const signup = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { email, password, name, confirm_password } = user

        if (email && password && name && confirm_password) {
            setShowModal(false)
            setStatus(true)
        } else {
            alert('Please fill in all the fields.')
        }
    }


    return (
        <div className='w-full flex flex-col gap-4'>

            <SectionTitle text='1' placeholder='Identify' status={status} setShowModal={setShowModal} setStatus={setStatus} />
            {showModal && (
                <form className='flex flex-col gap-4 ' onSubmit={signup}>
                    <Input text="Name" type="text" value={user.name || ''} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    <Input text="Email" type="email" value={user.email || ''} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <Input text="Password" type="password" value={user.password || ''} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <Input text="Password Confirmation" type="password" value={user.confirm_password || ''} onChange={(e) => setUser({ ...user, confirm_password: e.target.value })} />
                    <Button text="Confirm" />
                </form>
            )}
        </div>
    )
}

export default Identify