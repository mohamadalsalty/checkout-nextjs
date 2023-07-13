import React from 'react'
import Button from '../utils/Button'
import SectionTitle from './SectionTitle'


interface ChoosePlanProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setStatus: React.Dispatch<React.SetStateAction<boolean | 'disabled'>>
    showModal: boolean
    status?: boolean | 'disabled'
    plan: string
    setPlan: React.Dispatch<React.SetStateAction<string>>

}

const ChoosePlan: React.FC<ChoosePlanProps> = ({ setShowModal, setStatus, showModal, status, plan, setPlan }) => {

    const signup = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setShowModal(false)
        setStatus(true)
    }


    return (
        <div className='w-full flex flex-col gap-4'>

            <SectionTitle text='2' placeholder='Choose Plan' status={status} setShowModal={setShowModal} setStatus={setStatus} />
            {showModal && (
                <form className='flex flex-col gap-4 ' onSubmit={signup}>
                    <select className='border border-primary' id='plan' value={plan} onChange={(e) => setPlan(e.target.value)}>
                        {[1, 2, 3, 4, 5].map((key) => (
                            <option key={key} value={key.toString()}>
                                Plan {key}
                            </option>
                        ))}
                    </select>

                    <Button text='Confirm' />
                </form>
            )}
        </div>
    )
}

export default ChoosePlan