import Table from "@/Components/Table"
import TextInput from '@/Components/TextInput';
import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import Paginator from "@/Components/Paginator";
export default function Customer({user, sample}){

    const thead = [
        'name',
        'email',
        'Link created'
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('api.user.setUser'), {
            onSuccess: () => (
                'sdf'
            )
        })
    };



    return (

        <div className="card">
            <div className="card-body">
                <TextInput
                    id="name"
                    name="name"
                    type="text"
                    value={data.name}
                    handleChange={onHandleChange}
                />
                <button onClick={submit}></button>

                <Table
                    t_head={thead}
                >
                    {
                        user.data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.get_url_count}</td>
                            </tr>
                        ))
                    }

                </Table>

                <div className="mgn-t-3">
                    <Paginator paginate={user.links}/>
                </div>
            </div>
        </div>
    )


}
