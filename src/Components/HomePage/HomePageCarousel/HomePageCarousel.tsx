import React, {useState} from 'react'
import {Carousel} from "react-bootstrap";
import studentsStudying from '../../../media/read_learn_school_student_education_knowledge_study-1372155.jpg'
import advocacy from '../../../media/advocacy.jpg'
import social from '../../../media/friend_woman_person_man_talking-180040.jpg'
import './HomePageCarousel.css'

export default function App() {
  const [index, setIndex] = useState(0);

  function handleSelect(selectedIndex:number, e: (Record<string, unknown> | null)) {
    setIndex(selectedIndex);
  }

  return(
    <Carousel className="carouselCustom" activeIndex={index} onSelect={handleSelect} fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={studentsStudying}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Study Support</h1>
          <h2>Some Message about Studying.</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={advocacy}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Advocacy</h1>
          <h2>Some Message about Advocacy</h2>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={social}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>Social</h1>
          <h2>
            Is this even meant to be here?
          </h2>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}
