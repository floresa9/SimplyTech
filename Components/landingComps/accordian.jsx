import React from 'react'
import 'react-accessible-accordion/dist/fancy-example.css'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'

export default function Example() {
  const items = [
    {
      id: 1,
      heading: 'How do I get in touch?',
      content:
        'Our Team is available 7 days a week. You can click the contact us section at the bottom of the page and fill out the form. We try to reply quickly, so you need not to wait too long for a response!.',
    },
    {
      id: 2,
      heading: 'How often is the site updated?',
      content:
        'We try and keep our site up to date with the latest news and guides so you dont have to go out research. We try to keep it up to date weekly. Get the latest news ahead of time by joining our newsletter!',
    },
    {
      id: 3,
      heading: 'Why use SimplyTech if I can do the research on my own?',
      content:
        'We keep everything in one place so you dont have to go out and research. We do the researching for you! We give you in depth guides, news, and tutorials for the Web 3.0 age!',
    },
  ]

  return (
    <Accordion allowZeroExpanded className="border-none ">
      {items.map((item) => (
        <AccordionItem key={item.id} className="mt-2 ">
          <AccordionItemHeading>
            <AccordionItemButton>{item.heading}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>{item.content}</AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
