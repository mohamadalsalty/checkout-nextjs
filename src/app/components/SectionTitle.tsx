import React from 'react'


interface SectionTitleProps {
    text: string
    status?: boolean | 'disabled'
    setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
    setStatus: React.Dispatch<React.SetStateAction<boolean | 'disabled'>>
    placeholder: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text, status = false, setShowModal, setStatus, placeholder }) => {


    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
                <div className={`w-10 h-10 ${status === true && 'bg-[green]'} ${status === false && 'bg-primary'} ${status === 'disabled' && 'bg-[gray]'}   rounded-[50%] flex justify-center items-center`}>
                    <span className='text-white'>{text}</span>
                </div>
                <span>{placeholder}</span>
            </div >

            {
                status === true && setShowModal && setStatus && (
                    <div>
                        <a className='cursor-pointer' onClick={() => { setShowModal(true); setStatus(false) }}>Edit</a>
                    </div>
                )
            }
        </div >
    )
}

export default SectionTitle