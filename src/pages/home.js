import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const [fade, setFade] = useState(false)
    const styles = {
        normal: 'text-2xl text-green-600 w-[100%] h-[100%] mt-[30vh] p-5',
        fadeOut:
            'text-2xl text-green-600 w-[100%] h-[100%] fade-out-1s mt-[30vh] p-5',
    }
    const handleClick = () => {
        setTimeout(() => {
            navigate('/first-scene')
        }, 1000)
        setFade(true)
    }
    return (
        <div className={fade ? styles.fadeOut : styles.normal}>
            <h1>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isnt anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
            </h1>
            <p onClick={handleClick} className="text-center mt-5">
                NEXT SCENE
            </p>
        </div>
    )
}
