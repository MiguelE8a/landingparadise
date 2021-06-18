import React from 'react'
import './style/Retailer.scss'
import Retailerli from './Retailer_li.jsx'
import RetailerDownload from './RetailerDownload.jsx'
import logoSpotify from './static/spotifylogo.png'
import Deezerlogo from './static/deezerlogo.png'
import ApleMusiclogo from './static/applemusiclogo.png'
import YoutubeLogo from './static/youtubelogo.png'
import SoundCloudLogo from './static/soundcloud.png'
import OficialStore from './static/download.png'


const Retailer = () =>(
  <div className="provider-list">
    <ul className="retailer-ul">
      <Retailerli 
      title="Listen"
      image={logoSpotify}
      url="https://open.spotify.com/album/1cA7ZqBSPsBHCTwUVzXOqA"
      />
      <Retailerli 
      title="Listen"
      image={ApleMusiclogo}
      url="https://music.apple.com/pe/album/paradise-single/1391406682?app=music&ign-mpt=uo%3D4"
      />
      <Retailerli 
      title="Listen"
      image={Deezerlogo}
      url="https://www.deezer.com/es/track/505176682?utm_source=deezer&utm_content=track-505176682&utm_term=2159151288_1527845793&utm_medium=web"
      />
      <Retailerli 
      title="Listen"
      image={YoutubeLogo}
      url="https://www.youtube.com/watch?v=jg9iuKVXF7g"
      />
      <Retailerli 
      title="Listen"
      image={SoundCloudLogo}
      url="https://soundcloud.com/deejaynigel/paradise"
      />
      <RetailerDownload 
      title = "Download"
      url="https://show.co/RLcKEW2"
      />
     
    </ul>
  </div>
)

export default Retailer