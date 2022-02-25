import React from 'react'
import nft1 from '../../images/beta-1.jpeg'
import Fade from 'react-reveal/Fade'

export default function nftCard() {
  return (
    <>
      <Fade left>
        <div
          className="featureWrapper"
          style={{ position: 'relative', cursor: 'pointer', marginTop: '10px' }}
        >
          <div className="nft_img"></div>

          <h1
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: 'white',
            }}
            className="text-8xl"
          >
            1.
          </h1>
          <h1
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              color: 'white',
            }}
            className="text-2xl "
          >
            CRYPTO PUNKS
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div
          className="featureWrapper"
          style={{ position: 'relative', cursor: 'pointer', marginTop: '10px' }}
        >
          <div className="nft_img2"></div>

          <h1
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: 'white',
            }}
            className="text-8xl"
          >
            2.
          </h1>
          <h1
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              color: 'white',
            }}
            className="text-2xl"
          >
            BORED APE YACHT CLUB
          </h1>
        </div>
      </Fade>
      <Fade right>
        <div
          className="featureWrapper"
          style={{ position: 'relative', cursor: 'pointer', marginTop: '10px' }}
        >
          <div className="nft_img3"></div>

          <h1
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              color: 'white',
            }}
            className="text-8xl"
          >
            3.
          </h1>
          <h1
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '20px',
              color: 'white',
            }}
            className="text-2xl "
          >
            MUTANT APE YACHT CLUB
          </h1>
        </div>
      </Fade>
    </>
  )
}
