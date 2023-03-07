import Create from "./Create"
import Edit from "./Update"
import TextInput from "@/Components/TextInput"
import React, { useState } from 'react'
import { useForm, usePage } from '@inertiajs/react'
import Modal from "@/Components/Modal"
import { router } from '@inertiajs/react'
export default function Welcome({items}) {

    const [toggle, setToggle] = useState(false)
    const [values, setValues] = useState()
    
    const url = window.location.href + '/';


    const handleDelete =(e, id) => {
        e.preventDefault()
        router.delete('/user/url/delete/'+ id)
    }

    const openModal = (data) => {
        console.log(data)
        setToggle(true)
        setValues(data)
    }
    
   
    return (
        <div className="card">
            <div className="card-body">
                <div className="l-sz-main">
                    <div className='l-sz-4'>
                        <Create/>
                    </div>
                    <div className='l-sz-8 '>
                        <ul className="list-item mgn-l-8">
                            {
                                items.map((item) => (
                                    <li 
                                        className="bdr-btm__1--default pdg-btm__2"
                                        key={item.result_code}
                                    >
                                        <p className="fnt-sz__3 fnt-wgt__md">
                                            {url}{item.result_code}
                                        </p>
                                        <div className="dpl-inl-flx wdt-full">
                                            <div className="dpl-blk mgn-r-4 fnt-sz__3">
                                                <p className="txt-color__primary">
                                                    {url}{item.current_url}
                                                </p>
                                                <p>{item.created_at}</p>
                                            </div>
                                            <div className='btn-group mgn-l-ato'>
                                                <button
                                                    onClick={() => openModal({
                                                        current_url: item.current_url,
                                                        id: item.id
                                                    })}
                                                >
                                                    <i className="uil uil-edit"></i>
                                                </button>
                                                <button type="button" onClick={(e) => handleDelete(e, item.id)}>
                                                    <i className="uil uil-trash"></i>
                                                </button>
                                            </div>
                                            
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>  
                </div>
            </div>
            <Modal show={toggle}>
                <Edit values={values}/>
            </Modal>
        </div>
    )
}