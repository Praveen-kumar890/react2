function Movie(props)
{
    const {title,url} = props
    return(
        <div className = 'movie'>
            <img src = {url} />
            <h3>{title}</h3>
        </div>
    )
}
export default Movie;