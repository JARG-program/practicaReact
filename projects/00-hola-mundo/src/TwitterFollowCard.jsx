import { useState } from 'react'
import './TwitterFollowCard.css'
export function TwitterFollowCard ({children, userName}){

    const [isFollow, setIsFollow] = useState(false)

    console.log(isFollow)
    const text= isFollow ? 'Siguiendo' : 'Seguir'
    const clase = isFollow ? 'is-follow' : ' '

    const handleClick = () =>{
        setIsFollow(!isFollow)
    }
    //
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img
            className="tw-followCard-avatar"
            src="https://unavatar.io/sindresorhus@gmail.com" 
            alt="El avatar" />
            <div>
                <strong>{children}</strong>
                <span>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={clase} onClick={handleClick}>
                {text}
            </button>
        </aside>
    </article>
    )
}