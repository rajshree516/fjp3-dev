import React, { Component } from 'react'

import{movies} from '../movieData';

export class MoviesList extends Component {
  render() {
    let moviesArr=movies.results

    return (
      <>
      <div>
        <h3 className='text-center'><strong>Trending</strong></h3>
      </div>

      <div className='movies-list'>
        {
          moviesArr.map((movieEle)=>(
            <div className="card movie-card" >
            <img src="https://m.media-amazon.com/images/M/MV5BMjMxMzc4NTEyN15BMl5BanBnXkFtZTgwNDgyMjA3MTE@._V1_FMjpg_UX1000_.jpg" style={{height:'40vh' , width:'20vw'}} className="card-img-top movie-img" alt="..."/>
    
            <h5 className="card-title banner-title">{movieEle.title}</h5>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
     
            </div>
          ))
        }

      </div>
      </>
    )
  }

}

export default MoviesList
