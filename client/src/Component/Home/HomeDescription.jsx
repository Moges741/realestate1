import './HomeDescription.css'
export default function HomeDescription() {
  return (
    <div className="home-description">
        <div className='image'>
            <img src="/homeDescription.jpg" alt="" />
        </div>
        <div className='description'>

        <h2>We Help You To Find Your Dream Home</h2>
        <p>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
    <div className="stats">
        <p><span className='number'>8K+</span> <span>House Available</span></p>
        <p><span className='number'>6k+</span><span>House Holds</span></p>
        <p><span className='number'>2K+</span><span>Happy Customers</span></p>
        </div>
        </div>
    </div>
      
  )
}