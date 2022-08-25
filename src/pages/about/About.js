import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

function About() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Nisi eu cillum nulla do anim minim ea dolore id consectetur laboris officia sint consectetur. 
        Adipisicing fugiat quis tempor eiusmod proident culpa quis commodo sunt minim voluptate occaecat Lorem. 
      </Header>
      <section className='about--story'>
        <div className='container about--story-container'>
           <div className='about--section-image'>
             <img src={StoryImage} alt="Story Image" />
           </div>
           <div className='about--section-content'>
              <h1>Our Story</h1>
              <p>
                Enim tempor minim ad esse exercitation. Cillum laborum est incididunt ut. 
                Commodo nulla quis est excepteur eiusmod. Commodo ipsum aute fugiat ex duis officia dolore id.
                pariatur consequat do non ut.
              </p>
              <p>
                Fugiat tempor veniam officia tempor. Eiusmod aliquip nostrud elit fugiat aute ea nostrud labore veniam. 
                Magna laborum nisi adipisicing incididunt proident. Laboris consequat veniam consequat consectetur irure 
                dolore exercitation adipisicing do nulla.
              </p>
              <p>
                Lorem enim excepteur dolore enim. Nulla in tempor nisi irure ea reprehenderit irure esse ut non nisi 
                aute elit veniam et. Sit velit enim culpa fugiat exercitation exercitation labore. Qui cillum non exercitation.
                Deserunt non nulla aliqua ipsum tempor magna laborum. Sint eu dolore culpa eu tempor occaecat. 
                Sunt aute Lorem commodo elit. Magna aliqua culpa in anim qui et 
                laborum veniam amet. Veniam nostrud labore consequat irure qui enim magna eiusmod anim.
              </p>
           </div>
        </div>
      </section>

      <section className='about--vision'>
        <div className='container about--vision-container'>
           <div className='about--section-content'>
              <h1>Our Vision</h1>
              <p>
                Enim tempor minim ad esse exercitation. Cillum laborum est incididunt ut. 
                Commodo nulla quis est excepteur eiusmod. Commodo ipsum aute fugiat ex duis officia dolore id.
                pariatur consequat do non ut.
              </p>
              <p>
                Fugiat tempor veniam officia tempor. Eiusmod aliquip nostrud elit fugiat aute ea nostrud labore veniam. 
                Magna laborum nisi adipisicing incididunt proident. Laboris consequat veniam consequat consectetur irure 
                dolore exercitation adipisicing do nulla.
              </p>
           </div>
           <div className='about--section-image'>
             <img src={VisionImage} alt="Vision Image" />
           </div>
        </div>
      </section>


      <section className='about--mission'>
        <div className='container about--mission-container'>
           <div className='about--section-image'>
             <img src={MissionImage} alt="Mission Image" />
           </div>
           <div className='about--section-content'>
              <h1>Our Mission</h1>
              <p>
                Enim tempor minim ad esse exercitation. Cillum laborum est incididunt ut. 
                Commodo nulla quis est excepteur eiusmod. Commodo ipsum aute fugiat ex duis officia dolore id.
                pariatur consequat do non ut.
              </p>
              <p>
                Fugiat tempor veniam officia tempor. Eiusmod aliquip nostrud elit fugiat aute ea nostrud labore veniam. 
                Magna laborum nisi adipisicing incididunt proident. Laboris consequat veniam consequat consectetur irure 
                dolore exercitation adipisicing do nulla.
              </p>
              <p>
                Lorem enim excepteur dolore enim. Nulla in tempor nisi irure ea reprehenderit irure esse ut non nisi 
                aute elit veniam et. Sit velit enim culpa fugiat exercitation exercitation labore. Qui cillum non exercitation.
                Deserunt non nulla aliqua ipsum tempor magna laborum. Sint eu dolore culpa eu tempor occaecat.
              </p>
           </div>
        </div>
      </section>

    </>
  )
}

export default About