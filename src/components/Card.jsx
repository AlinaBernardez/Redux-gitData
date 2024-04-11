function Card({user}) {
return (
    <div className='card'>
        <img src={user.avatar_url} alt="foto perfil" />
        <p>Nombre: {user.name} </p>
        <p>userName: {user.login} </p>
        <p>Seguidores: {user.followers} </p>
        <p>Repositorios: {user.public_repos} </p>
    </div>
    )
}

export default Card