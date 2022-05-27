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
        <Carousel.Caption>
          <h2>Study Support</h2>
          <h3>Some Message about Studying.</h3>
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src={studentsStudying}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={advocacy}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Advocacy</h2>
          <h3>Some Message about Advocacy</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={social}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Social</h2>
          <h3>
            Is this even meant to be here?
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}
