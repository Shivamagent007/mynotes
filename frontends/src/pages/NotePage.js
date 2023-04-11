import React from 'react'
import { useState,useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import { useHistory } from "react-router-dom";

const NotePage = ({match}) => {
    let noteId = match.params.id
    console.log(noteId)
    let [note,setNote]  = useState("")

    useEffect(()=> {
        getNote()
    }, [noteId])

    const history = useHistory();        

    let getNote = async ()=> {
        if  (noteId === 'new') return 
        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        console.log(data)
        setNote(data)
    }

    let createNote = async ()=> {
        let response = await fetch(`/api/notes/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
        console.log('Create activated')
        console.log(JSON.stringify(note))

        
        history.push('/');


    }

    let updateNote = async ()=> {
        let response = fetch(`/api/notes/${noteId}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(note)
        })
        console.log('Update activated')
        

        history.push('/')

    }

    let deleteNote = async ()=>{
        fetch(`/api/notes/${noteId}`,{
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log('Delete activated')
        history.push('/');
    }

    let handleSubmit = ()=> {
        if (note.body === ""){
            deleteNote()
        } else if (noteId !== 'new'){
            updateNote()
        }else if (noteId === 'new' && note.body !==""){
            createNote()
        }
        
    }

    return (
        <div className="note">
            <div className="note-header">
                    <ArrowLeft onClick={handleSubmit}/>
                    { noteId !== 'new' ? (
                        <button onClick={deleteNote}>Delete</button>
                    ): (
                        <button onClick={handleSubmit}>Done</button>
                    )}
            </div>
            <textarea onChange={(e)=> { setNote({...note, 'body': e.target.value })}} value={note?.body}></textarea>
        </div>
  )
}

export default NotePage