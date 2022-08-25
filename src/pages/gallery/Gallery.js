import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

function Gallery() {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Mollit Lorem ex et excepteur magna dolor non dolore.Proident nisi sit aliqua Lorem eu adipisicing 
        adipisicing qui aute do. Aliqua et mollit enim culpa mollit non mollit. 
      </Header>
      <section className="gallery">
        <div className='container gallery--container'>
          {
            images.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Gallery Image ${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery