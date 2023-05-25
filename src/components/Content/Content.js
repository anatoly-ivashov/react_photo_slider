import { GradientTitle } from '../GradientTitle/GradientTitle'
import { IconButton } from '../IconButton/IconButton'
import { Slider } from '../Slider/Slider'
import photo_1 from '../../assets/images/1_photo.png'
import photo_2 from '../../assets/images/2_photo.png'
import photo_3 from '../../assets/images/3_photo.png'
import photo_4 from '../../assets/images/4_photo.png'
import photo_5 from '../../assets/images/5_photo.png'
import photo_6 from '../../assets/images/6_photo.png'
import './Content.css'

const sliderData = [
  {
    label: 'CEO AND COFOUNDER, ARKETA',
    title: 'Rachel Lea Fishman',
    img: photo_1
  },
  {
    label: 'CEO AND CO-FOUNDER, FORMA',
    title: 'Jason Fan',
    img: photo_2
  },
  {
    label: 'CEO, OPENAI',
    title: 'Sam Altman',
    img: photo_3
  },
  {
    label: 'SVP OF PRODUCT, JOBBER',
    title: 'Jeff Sheclock',
    img: photo_4
  },
  {
    label: 'HEAD OF STRATEGY, SARDINE',
    title: 'Simon Taylor',
    img: photo_5
  },
  {
    label: 'HEAD OF GLOBAL SALES, STRIPE',
    title: `Eileen O'Mara`,
    img: photo_6
  },
]

export const Content = () => (
  <div className="content">
    <GradientTitle>Meet our speakers</GradientTitle>
    <div className="content__grid">
      <p>Our speaker lineup comprises leaders from Stripe and beyond, who’ll share knowledge and advice on the most pressing topics facing companies today. Stay tuned for more announcements.</p>
    </div>
    <Slider data={sliderData} />
  </div>
)
