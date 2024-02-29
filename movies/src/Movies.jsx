import Movie from "./movie";
import pon from "./popular";
import utp from "./us";
import inf from "./india";
function Movies()
{
    return(
        <div >
            <h1>Popular On Netflix</h1>
            <div className='movies'>
                {
                pon.map((m)=>(
                    <Movie url = {m.image} title = {m.title} />
                ))
                }
            </div>
            <h1>US Top Movies</h1>
            <div className='movies'>
                {
                utp.map((m)=>(
                    <Movie url = {m.image} title = {m.title} />
                ))
                }
            </div>
            <h1>Indian New Films</h1>
            <div className='movies'>
                {
                inf.map((m)=>(
                    <Movie url = {m.image} title = {m.title} />
                ))
                }
            </div>
        </div>
    )
}
export default Movies