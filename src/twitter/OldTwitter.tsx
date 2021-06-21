import React, { FC, useState } from "react"
import TwitBody, { PostType } from "./TwitBody"
import { IconContext } from 'react-icons'
const OldTwitter: FC = () => {
    const arrPost: Array<PostType> = [{ id: 1, post: '123s21' }, { id: 2, post: '124d214' }, { id: 3, post: '14242d13' }]
    const [post, setPost] = useState(arrPost)
    const [value, setValue] = useState('')

    const handleChange = (e: React.SyntheticEvent): void => {
        const { value } = e.target as HTMLInputElement
        setValue(value)

    }

    const handleClick = () => {
        if (value !== '') {
            setPost([...post, { id: Date.now(), post: value }])
            setValue('')
        }
    }

    const editPost = (id: number, newPost: string) => {
        const editedPost = [...post].map((post) => {
            if (post.id === id) {
                post.post = newPost
                return { ...post, post: newPost }
            }
            return post

        })
        setPost(editedPost)

    }

    const deletePost = (id: number) => {
        setPost(post.filter((item, i) => item.id !== id))
    }
    const twitList = post.map(post =>
        <TwitBody editPostFunction={editPost} value={value} id={post.id} post={post.post} deletePostFunction={deletePost} />)

    return <IconContext.Provider value={{ className: "react-icons" }} >
        <div className='container-flex'>
           
            <div className="twit-container">
                 <div className='makeTwit-container'>
                <textarea placeholder={'Tweet about something...'}  maxLength={140} rows={5} cols={50} value={value} onChange={handleChange}></textarea><button className='btn btn-primary' onClick={handleClick}>Add Post</button>
                <p>{value.length}</p>
            </div>

                {twitList}
            </div>
        </div>
    </IconContext.Provider>


}


export default OldTwitter