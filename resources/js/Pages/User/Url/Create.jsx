

import TextInput from "@/Components/TextInput"
import { useForm, usePage } from '@inertiajs/react'
import Button from "@/Components/PrimaryButton"
// import List from "@/Pages/ListUrl"
import InputError from '@/Components/InputError';


export default function create(){

    const { code } = usePage().props
    const url = window.location.href + '/';

    const { data, setData, post, processing, errors, reset } = useForm({
        current_url: '',
        result_code: ''
    })

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
        
    }
    const handleSubmit = (e) => {
        // code != null ? url + data.current_url : data.current_url
     
        e.preventDefault()        
        post('/user/url/store', {
            onSuccess: () => {
                   data.current_url = url + data.current_url
            }
        })
        
    }

    const clear = () => {
        location.reload()
      
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mgn-b-2">
                    <p className="mgn-b-2">
                        <i className="uil uil-link mgn-r-2 fnt-sz__4"></i>

                        Your URL name
                    </p>
                    <TextInput 
                        // className="wdt-full"
                        type ="text"
                        name="current_url"
                        value={data.current_url}
                        // value={code != null ? url + data.current_url : data.current_url}
                        id="urlInput"
                        placeholder="example.com"
                        handleChange={handleChange}
                    >

                    </TextInput>

                    <InputError message={errors.current_url} className="mt-2" />

                    
                </div>
                
                <div className="mgn-b-2">
                    <p className="mgn-b-2">
                        <i className="uil uil-lightbulb mgn-r-3 fnt-sz__4"></i>
                        Result URL
                    </p>
                    <TextInput 
                        // className="wdt-full"
                        readOnly
                        type ="text"
                        name="url"
                        id="result_url"
                        value={code != null ? code : ''}
                        placeholder="example.com"
                    >

                    </TextInput>
                </div>
                
                <Button type="submit" processing={processing}>Submit</Button>
                <Button type="button" className="mgn-l-3" onClick={clear}>Clear</Button>
            </form>
        </>
    )
}