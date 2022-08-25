import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {BsMessenger} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

function Contact() {
  return (
    <>
      <Header title="Get In touch" image={HeaderImage}>
        Aliqua consequat Lorem nulla dolor anim aliqua voluptate sint veniam duis. 
        Veniam dolor elit ex elit sint exercitation et sint culpa laborum aliquip occaecat. 
        Est ullamco nisi velit aute aliqua labore occaecat mollit culpa cupidatat. 
      </Header>
      <section className='contact'>
        <div className='container contact--container'>
          <div className='contact--wrapper'>
            <a href='mailto:support@gmail.com' target='_blank' rel="nonreferrer noopener"><MdEmail /></a>
            <a href='https://www.facebook.com/onigbanjo.abdulbasit.1' target='_blank' rel="nonreferrer noopener"><BsMessenger /></a>
            <a href='https://wa.me/+2348100915525' target='_blank' rel="nonreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact