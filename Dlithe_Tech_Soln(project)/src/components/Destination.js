import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available all across India</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Computer Repair</h3>
          <p>
            Find solutions to your computer repair questions. PC troubleshooting,repair and service available.
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Data Recovery</h3>
          <p>
            Recover lost or deleted data from Hard Drives, SSD, RAID, Tapes, Servers, Cloud Storage, Virtual Machines and CCTV DVR.
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>On-site Service</h3>
          <p>
            Offers on-site support to those who dont want to compromise with quality and efficiency. Fully flexible contract terms and extended, or out of hours service at no extra cost.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations