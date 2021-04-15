import Link from 'next/link'
import React from 'react'
import { Card, Container, Input, Label, Image, Icon } from 'semantic-ui-react'

export default function Roadmap() {
  return (
    <Container className="pt-4 pb-16">
      <h1>Roadmap</h1>
      <Image fluid src="https://place-hold.it/1300x200" />

      <h2 className="pt-8">2020-2021</h2>
      <p className="pb-2">
        The current development focus of the KlickerUZH is centered around
        stability and integrity of the voting performed on the platform. As part
        of a project sponsored by the Faculty of Business, Economics and
        Informatics, we have released authentication capabilities for KlickerUZH
        sessions. Furthermore, we are cooperating with the UZH Central IT to get
        the platform running on Microsoft Azure, allowing for significant
        performance and stability improvements.
      </p>
      <Card.Group>
        <Card>
          <Card.Content header="Participant Authentication" />
          <Image src="https://place-hold.it/300x100" />
          <Card.Content>Lorem</Card.Content>
          <Card.Content extra className="flex items-center justify-between">
            <Label color="green">Released</Label>
            <Link href="https://uzh-bf.github.io/klicker-uzh/docs/advanced/participant_authentication">
              <a target="_blank">
                <Icon name="info circle" /> Documentation
              </a>
            </Link>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header="Scalability and Performance" />
          <Image src="https://place-hold.it/300x100" />
          <Card.Content>Lorem</Card.Content>
          <Card.Content extra>
            <Label color="olive">Working On</Label>
            <Label>Fall 21</Label>
          </Card.Content>
        </Card>
      </Card.Group>

      <h2 className="mt-16">2021-2023</h2>
      <p className="pb-2">
        As part of a project backed by the University of Zurich and
        swissuniversities, the KlickerUZH team will be working on several
        interesting focus areas over the coming years. We will be developing
        best practices and materials, as well as extending the KlickerUZH with
        capabilities that support each of these areas.
      </p>
      <div className="flex">
        <Image className="w-48 mr-8" src="/img/logo_swissuniversities.png" />
        <Image className="w-48" src="/img/logo_uzh.jpeg" />
      </div>

      <Card.Group>
        <Card>
          <Card.Content header="Gamification and Engagement" />
          <Image src="https://place-hold.it/300x100" />
          <Card.Content>Lorem</Card.Content>
          <Card.Content extra>
            <Label color="grey">Planned</Label>
            <Label>Spring 22</Label>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header="Interaction" />
          <Image src="https://place-hold.it/300x100" />
          <Card.Content>Lorem</Card.Content>
          <Card.Content extra>
            <Label color="grey">Planned</Label>
            <Label>Spring 22</Label>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content header="In-Depth Analysis" />
          <Image src="https://place-hold.it/300x100" />
          <Card.Content>Lorem</Card.Content>
          <Card.Content extra>
            <Label color="grey">Planned</Label>
            <Label>Fall 22</Label>
          </Card.Content>
        </Card>
      </Card.Group>

      <h2 className="mt-16">Get Involved</h2>
      <p>
        We strive to center our roadmap and goals around the needs of our users.
        If you would like to be involved in the development, we welcome you to
        join our new KlickerUZH user group. ...
      </p>
      <Input />
      <p>Join MS teams...</p>
    </Container>
  )
}
