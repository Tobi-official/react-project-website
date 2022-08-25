import {Link} from 'react-router-dom'
import image from '../images/main_header.png'

function MainHeader() {
  return (
    <header className="main--header">
      <div className="container main--header-container">
        <div className="main--header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis 
            accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main--header-right">
          <div className='main--header-circle'></div>
          <div className='main--header-image'>
            <img src={image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader