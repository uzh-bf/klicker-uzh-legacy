import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

import KlickerUZH from './KlickerUZH'

function Header() {
  return (
    <header className="bg-white">
      <Container>
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mt-4 lg:my-1 lg:w-52">
            <Link href="/">
              <KlickerUZH />
            </Link>
          </div>

          <Menu text as="nav">
            <Menu.Item as={Link} href="/" name="home">
              Home
            </Menu.Item>

            <Menu.Item
              name="faq"
              as="a"
              href="https://uzh-bf.github.io/klicker-uzh/docs/faq/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </Menu.Item>

            <Menu.Item
              as={ScrollLink}
              to="footer"
              smooth
              duration={500}
              offset={-50}
              name="contact"
            >
              Contact Us
            </Menu.Item>

            <Menu.Item>
              <Button
                primary
                as="a"
                href="https://app.klicker.uzh.ch/user/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </Container>
    </header>
  )
}

export default Header
