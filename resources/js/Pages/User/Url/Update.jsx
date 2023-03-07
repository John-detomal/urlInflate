
import TextInput from "@/Components/TextInput"
import { useForm, usePage } from '@inertiajs/react'
import Button from "@/Components/PrimaryButton"

export default function update({values}){

    const { data, setData, post, processing, errors, reset } = useForm({
        current_url: values.current_url,
    })

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/user/url/update/' + values.id, {
            onSuccess: () => {
                location.reload()
            }
        })
    }

    return (
        <div className="card">
            <div className="card-body">
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
                            value = {data.current_url}
                            id="urlInput"
                            placeholder="example.com"
                            handleChange={handleChange}
                        >

                        </TextInput>


                        <Button type="submit" processing={processing}>Submit</Button>

                    </div>
                </form>
            </div>
        </div>
    )
}