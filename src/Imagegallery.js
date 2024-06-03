import Box from './Box'
import './style.css'
import oneimage from './assests/boxer.jpg'
import twoimage from './assests/cane.jpg'
import threeimage from './assests/dane.jpg'
import fourimage from './assests/doberman.jpg'
import fiveimage from './assests/dogo.jpg'
import siximage from './assests/kangal.jpg'
import sevenimage from './assests/pitbull.jpg'
import eightimage from './assests/rott.jpg'

var doglist = [
    {
        "dogimg":oneimage,
        "dogname":"Boxer"
    },
    {
        "dogimg":twoimage,
        "dogname":"Cane Corso"
    },
    {
        "dogimg":threeimage,
        "dogname":"Great Dane"
    },
    {
        "dogimg":fourimage,
        "dogname":"Doberman"
    },
    {
        "dogimg":fiveimage,
        "dogname":"Dogo Argentino"
    },
    {
        "dogimg":siximage,
        "dogname":"Kangal"
    },
    {
        "dogimg":sevenimage,
        "dogname":"Pitbull"
    },
    {
        "dogimg":eightimage,
        "dogname":"rottweiler"
    }
]

function Imagegallery() {
    return(
        <div>
            <h1>Image Gallery</h1>
            <div className='boxes'>
                {
                    doglist.map(function (item) {
                        return(
                            <Box dogimg={item.dogimg} dogname={item.dogname}></Box>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Imagegallery