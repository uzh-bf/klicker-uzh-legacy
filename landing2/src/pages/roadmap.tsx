import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import {
  Card,
  Container,
  Input,
  Label,
  Image,
  Icon,
  Button,
  Form,
} from 'semantic-ui-react'

enum Status {
  RELEASED,
  WORKING_ON,
  PLANNED,
}

const StatusColor = {
  [Status.RELEASED]: 'green',
  [Status.WORKING_ON]: 'olive',
  [Status.PLANNED]: 'grey',
}

const StatusText = {
  [Status.RELEASED]: 'Released',
  [Status.WORKING_ON]: 'Working On',
  [Status.PLANNED]: 'Planned',
}

interface RoadmapItemProps {
  title: string
  description: string
  status: Status
  children: any
}

function RoadmapItem({
  title,
  description,
  status,
  children,
}: RoadmapItemProps) {
  return (
    <Card color={StatusColor[status] as any}>
      <Card.Content header={title} />
      {/* <Image src="https://place-hold.it/300x100" /> */}
      <Card.Content>{description}</Card.Content>
      <Card.Content extra className="flex items-center">
        <Label color={StatusColor[status] as any}>{StatusText[status]}</Label>
        {children}
      </Card.Content>
    </Card>
  )
}

export default function Roadmap() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Container className="pt-4 pb-16">
      <h1>Roadmap</h1>
      <div className="mb-8">
        <Image bordered fluid src="/img/whiteboard.png" />
      </div>

      <h2 className="pt-4">Current Focus Areas</h2>
      <p className="mb-8 prose prose-lg max-w-none">
        The current development focus of the KlickerUZH is centered around
        stability and integrity of the voting performed on the platform. As part
        of a project sponsored by the Faculty of Business, Economics and
        Informatics, we have released authentication capabilities for KlickerUZH
        sessions. Furthermore, we are cooperating with the UZH Central IT to get
        the KlickerUZH running on Microsoft Azure, allowing for significant
        performance and stability improvements.
      </p>

      <Card.Group>
        <RoadmapItem
          title="Participant Authentication"
          description="Restrict access to your KlickerUZH sessions by defining a list of authorized participants (AAI or username/password)."
          status={Status.RELEASED}
        >
          <Link href="https://uzh-bf.github.io/klicker-uzh/docs/advanced/participant_authentication">
            <a className="ml-4" target="_blank">
              <Icon name="info circle" /> Documentation
            </a>
          </Link>
        </RoadmapItem>

        <RoadmapItem
          title="Scalability and Performance"
          description="Deployment to the Microsoft Azure cloud allows us to optimize the KlickerUZH for scalability and performance."
          status={Status.WORKING_ON}
        >
          <Label>Fall 21</Label>
        </RoadmapItem>
      </Card.Group>

      <h2 className="mt-16">Future Focus Areas</h2>

      <h3>2021-2023</h3>
      <p className="mb-8 prose prose-lg max-w-none">
        As part of a project backed by the University of Zurich and
        swissuniversities, the KlickerUZH team will be working on several
        interesting focus areas over the coming years. We will be developing
        best practices and materials, as well as extending the KlickerUZH with
        capabilities that support each of these areas.
      </p>
      <div className="flex pb-4">
        <Image className="w-48 mr-16" src="/img/logo_swissuniversities.png" />
        <Image className="w-48" src="/img/logo_uzh.jpeg" />
      </div>

      <Card.Group>
        <RoadmapItem
          title="Gamification and Engagement"
          description="The incorporation of gamified interactions allows lecturers to increase engagement in their (virtual) classrooms."
          status={Status.PLANNED}
        >
          <Label>Spring 22</Label>
        </RoadmapItem>

        <RoadmapItem
          title="Interaction"
          description="New interaction modalities for virtual and physical classrooms improve interaction between lecturers and participants."
          status={Status.PLANNED}
        >
          <Label>Spring 22</Label>
        </RoadmapItem>

        <RoadmapItem
          title="In-Depth Analysis"
          description="Analysis functionalities allow lecturers to evaluate their sessions and questions in terms of different quality dimensions."
          status={Status.PLANNED}
        >
          <Label>Fall 22</Label>
        </RoadmapItem>
      </Card.Group>

      <h2 className="mt-16">Get Involved</h2>
      <p className="mb-8 prose prose-lg max-w-none">
        We strive to develop our roadmap and goals based on the needs of our
        users. If you are interested in classroom interaction and would like to
        be involved in future developments, we welcome you to join our new
        KlickerUZH user group with the following form.
      </p>
      <div className="max-w-lg">
        <Form>
          <Form.Field>
            <Input
              placeholder="Name"
              value={name}
              onChange={(_, { value }) => setName(value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Email"
              value={email}
              onChange={(_, { value }) => setEmail(value)}
            />
          </Form.Field>
          <Button
            onClick={() => {
              setName('')
              setEmail('')
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}
