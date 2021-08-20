import React, { useRef } from 'react'
import './modal.css'

function Modal({showModal, setShowModal}) {

    const modalRef = useRef()

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return (
        <>
            {showModal ? 
                <div className='modalBackdrop' ref={modalRef} onClick={closeModal}>
                    <form className='modalContainer'>
                        <div>
                            <label htmlFor='name' className='label'>Project Name</label>
                            <input type='text' name='name' class='input'/>
                        </div>
                        <div className='btn-div'>
                            <button className='button'>Create</button>
                        </div>
                    </form>
                </div>
                : null
            }
        </>
    )
}

export default Modal