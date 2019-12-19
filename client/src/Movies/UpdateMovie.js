import React, {useState} from 'react';

export const UpdateMovie = () =>{
    const [form, setForm] = useState({
        title:'',
        director:'',
        metascore: Number,
        stars:[]
    })
    return(
        <div>
            <form>
                <input
                name='title'
                placeholder='Title'
                value = {form.title}
                onChange ={(e)=>{
                    setForm({
                        ...form,
                [e.target.name]:e.target.value
            })
                }}
                />
                <input
                name='title'
                placeholder='Title'
                value = {form.title}
                onChange ={(e)=>{
                    setForm({
                        ...form,
                [e.target.name]:e.target.value
            })
                }}
                />
                <input
                name='metascore'
                placeholder='Title'
                value = {form.metascores}
                onChange ={(e)=>{
                    setForm({
                        ...form,
                [e.target.name]:e.target.value
            })
                }}
                />
                <input
                name='stars'
                placeholder='Stars'
                value = {form.stars}
                onChange ={(e)=>{
                    setForm({
                        ...form,
                [e.target.name]:e.target.value
            })
                }}
                />
            </form>
        </div>
    )
}