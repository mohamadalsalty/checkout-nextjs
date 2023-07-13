import React from 'react'
import Button from '../utils/Button'
import Input from '../utils/Input'
import SectionTitle from './SectionTitle'



interface PaymentProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setStatus: React.Dispatch<React.SetStateAction<boolean | 'disabled'>>
    showModal: boolean
    status?: boolean | 'disabled'
    cCard: {
        first_name: string | null
        second_name: string | null
        card_number: string | null
        expires_month: string | null
        expires_year: string | null
        cvv: string | null
    }
    setCCard: React.Dispatch<React.SetStateAction<{
        first_name: string | null
        second_name: string | null
        card_number: string | null
        expires_month: string | null
        expires_year: string | null
        cvv: string | null
    }>>
}

const Payment: React.FC<PaymentProps> = ({ setShowModal, setStatus, showModal, status, cCard, setCCard }) => {

    const signUp = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const { first_name,
            second_name,
            card_number,
            expires_month,
            expires_year,
            cvv } = cCard

        if (first_name &&
            second_name &&
            card_number &&
            expires_month &&
            expires_year &&
            cvv) {

            setShowModal(false)
            setStatus(true)
        } else {
            alert('Please fill in all the fields.')
        }

    }


    return (
        <div className='w-full flex flex-col gap-4'>

            <SectionTitle text='3' placeholder='Payment' status={status} setShowModal={setShowModal} setStatus={setStatus} />
            {showModal && (
                <form className='flex flex-col gap-4 max-w-full' onSubmit={signUp}>
                    <div className="grid grid-cols-2 gap-2">
                        <Input text='First name' type='text' value={cCard?.first_name || ''} onChange={(e) => setCCard({ ...cCard, first_name: e.target.value })} />
                        <Input text='Last name' type='text' value={cCard?.second_name || ''} onChange={(e) => setCCard({ ...cCard, second_name: e.target.value })} />
                    </div>
                    <Input text='Card number' type='number' value={cCard?.card_number || ''} onChange={(e) => setCCard({ ...cCard, card_number: e.target.value })} />

                    <span>Expiration date</span>
                    <div className="grid grid-cols-2 gap-2 max-w-full">
                        <div className="grid grid-cols-2 gap-2">
                            <Input text='Month' type='text' minLength={2} maxLength={2} value={cCard.expires_month || ''} onChange={(e) => setCCard({ ...cCard, expires_month: e.target.value })} />
                            <Input text='Year' type='text' minLength={4} maxLength={4} value={cCard.expires_year || ''} onChange={(e) => setCCard({ ...cCard, expires_year: e.target.value })} />
                        </div>

                        <Input text='CVV' type='text' minLength={4} maxLength={4} value={cCard.cvv || ''} onChange={(e) => setCCard({ ...cCard, cvv: e.target.value })} />
                    </div>

                    <Button text='Confirm' />
                </form>
            )}
        </div>
    )
}

export default Payment