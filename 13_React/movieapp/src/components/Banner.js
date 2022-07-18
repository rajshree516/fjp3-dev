import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
    <div className="card banner-card" >
    <img src="https://m.media-amazon.com/images/M/MV5BMjMxMzc4NTEyN15BMl5BanBnXkFtZTgwNDgyMjA3MTE@._V1_FMjpg_UX1000_.jpg" className="card-img-top banner-img" alt="..."/>
    
        <h5 className="card-title banner-title">APP</h5>
        <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    
    </div>
    )
  }
}

export default Banner