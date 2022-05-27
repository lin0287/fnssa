import React from 'react'
import {Accordion, Button, Card} from "react-bootstrap";
import headspaceLogo from "../../../media/Headspace_organisation_logo.jpg";

export default function ResourcesAccordion() {
  return(
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Mental Health</Accordion.Header>
        <Accordion.Body>
          <Card style={{ width: '10rem' }}>
            <Card.Img variant="top" src={headspaceLogo} />
            <Card.Body>
              <Card.Text>
                A youth mental health organisation
              </Card.Text>
              <Button variant="primary">Visit website</Button>
            </Card.Body>
          </Card>


        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Study</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  )
}
