import { FcLike } from 'react-icons/fc'
import { FiMessageCircle, FiEdit } from 'react-icons/fi'
import { FaRetweet,FaRegUserCircle } from 'react-icons/fa'
import { RiDeleteBinLine } from 'react-icons/ri'
import React, { useState } from "react"
export type PostType = {
    id: number
    post: string
}
type TwitBodyType = {
    deletePostFunction: (index: number) => any
    editPostFunction: (id: number, newPost: string) => any
    value: string
    post: string
    id: number
}
const TwitBody = ({ post, deletePostFunction, editPostFunction, value, id }: TwitBodyType): JSX.Element => {
    const [isEditing, setEditing] = useState(false)
    const [editedPost, setEditPost] = useState(post)
    const handleChange = (e: React.SyntheticEvent) => {
        const { value } = e.target as HTMLInputElement
        setEditPost(value)
    }
    const handleSave = () => {
        editPostFunction(id, editedPost)
        setEditPost('')
        setEditing(false)
    }
    const data = new Date()
    const year = data.getFullYear()
    const editingList = (
        <><textarea onChange={handleChange} value={editedPost} /><button className="btn btn-primary" onClick={() => handleSave()}>Save</button><button className="btn btn-danger" onClick={() => setEditing(false)}>Cancel</button> </>
    )
        const style={
            color:'#2142AF',
            ':hover': {
                color:'blue'
            }
        }
    const viewList = (
        <div key={id} className="singleTwit-container"> <div className="head-twit"><FaRegUserCircle style={{fontSize:'3rem'}}/> <b>Nik Jones</b>  <span style={{color:'grey'}}>@NikJones</span></div>

            <div className="text-twit w-200 h-200">{post} </div>
            <div className="foot-twit" >
                <div><FiEdit style={style}  onClick={() => setEditing(true)} /><RiDeleteBinLine  onClick={() => deletePostFunction(id)} /> </div>
                <div><FcLike /><FiMessageCircle /><FaRetweet /></div>
                <div>{year} {data.getHours()}:{data.getMinutes()}</div>
            </div> </div>
    )
    return <>
    {isEditing ? editingList : viewList}
    </>
}
export default TwitBody
