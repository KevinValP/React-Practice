
export function TwitterFollowCard({username, name, isFollowing, avatarURL}) {
    const imageSrc = avatarURL || `https://unavatar.io/twitter/${username}?fallback=https://unavatar.io/api/unknown`;
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Avatar de Ejemplo" src={imageSrc} />

                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
