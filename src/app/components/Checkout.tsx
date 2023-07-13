"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Identify from './Identify'
import ChoosePlan from './ChoosePlan'
import Payment from './Payment'
import Button from '../utils/Button'




const Checkout: React.FC = () => {
    const [details, setDetails] = useState<boolean>(false)
    const [showModalId, setShowModalId] = useState<boolean>(true)
    const [statusId, setStatusId] = useState<boolean | 'disabled'>(false)
    const [showModalChoosePlan, setShowModalChoosePlan] = useState<boolean>(true)
    const [statusChoosePlan, setStatusChoosePlan] = useState<boolean | 'disabled'>(false)
    const [showModalPayment, setShowModalPayment] = useState<boolean>(true)
    const [statusPayment, setStatusPayment] = useState<boolean | 'disabled'>(false)
    const [user, setUser] = useState<{
        email: string | null
        password: string | null
        name: string | null
        confirm_password: string | null
    }>({
        email: null,
        password: null,
        name: null,
        confirm_password: null
    })
    const [plan, setPlan] = useState('')
    const [cCard, setCCard] = useState<{
        first_name: string | null
        second_name: string | null
        card_number: string | null
        expires_month: string | null
        expires_year: string | null
        cvv: string | null
    }>({
        first_name: null,
        second_name: null,
        card_number: null,
        expires_month: null,
        expires_year: null,
        cvv: null
    })
    const [done, setDone] = useState(false)

    return (
        <div className='flex flex-col items-center max-w-full w-[500px] mb-40'>
            <Image src="/logo.png" width={160} height={160} alt="logo" />

            <div className="bg-white flex flex-col items-center max-w-full w-[500px] px-4 pt-4 pb-4">
                <h1 className='text-2xl'>Subscribe now to our app</h1>
                <h2 className='text-2xl'>The light package</h2>
                <span className='font-bold text-2xl'>9.99$/month</span>
                {
                    details === true && (
                        <div className='flex flex-col gap-1 mt-4 w-full'>
                            <h3 className='underline text-center'>This is our newest plan</h3>
                            <p className='text-sm w-full text-gray-500 leading-4'>
                                Subscribe to our exclusive plan for premium features, priority support, discounts, early access, and more. Elevate your experience and unlock a world of possibilities today!
                            </p>
                        </div>
                    )
                }
                <a className='cursor-pointer' onClick={() => setDetails(!details)}>{
                    details === true && ("show less") || ("show more")
                }</a>
            </div>

            <hr className='border-t-0 border-b border-primary h-4 w-full mb-4' />
            <Identify showModal={showModalId} status={statusId} setShowModal={setShowModalId} setStatus={setStatusId} user={user} setUser={setUser} />

            <hr className='border-t-0 border-b border-primary h-4 w-full mb-4' />
            {statusId === false && (
                <ChoosePlan showModal={false} status='disabled' setShowModal={setShowModalChoosePlan} setStatus={setStatusChoosePlan} plan={plan} setPlan={setPlan} />
            )
                || (<ChoosePlan plan={plan} setPlan={setPlan} showModal={showModalChoosePlan} status={statusChoosePlan} setShowModal={setShowModalChoosePlan} setStatus={setStatusChoosePlan} />)

            }

            <hr className='border-t-0 border-b border-primary h-4 w-full mb-4' />

            {(statusId === false || statusChoosePlan === false) && (
                <Payment cCard={cCard} setCCard={setCCard} showModal={false} status='disabled' setShowModal={setShowModalPayment} setStatus={setStatusPayment} />
            )
                || (<Payment cCard={cCard} setCCard={setCCard} showModal={showModalPayment} status={statusPayment} setShowModal={setShowModalPayment} setStatus={setStatusPayment} />)

            }

            <hr className='border-t-0 border-b border-primary h-4 w-full mb-4' />

            {
                statusId === true && statusChoosePlan === true && statusPayment === true && (
                    <form className='w-full' onClick={(e) => { e.preventDefault(); alert('Congrats, you are member now!'); setDone(true) }}>
                        <Button text='Pay now' color="green" />
                    </form>
                )
            }





        </div >
    )
}

export default Checkout