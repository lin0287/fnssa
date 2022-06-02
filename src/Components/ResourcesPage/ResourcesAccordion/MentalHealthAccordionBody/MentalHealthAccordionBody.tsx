import React from 'react'
import {Accordion, Button, Card} from "react-bootstrap";
import headspaceLogo from "../../../../media/Headspace_organisation_logo.jpg";

export default function MentalHealthAccordionBody() {
  const headspaceRedirect = () => {
    window.location.replace("https://headspace.org.au/")
  };

  return(
    <Accordion.Body>

      <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" src={headspaceLogo} />
        <Card.Body>
          <Card.Text>
            A youth mental health organisation
          </Card.Text>
          <Button onClick={headspaceRedirect} variant="primary">Visit website</Button>
        </Card.Body>
      </Card>

    </Accordion.Body>
  )
}
