'use client'

import React from 'react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'ui'

export default function AccordionHideIndicatorDemo() {
  return (
    <Accordion hideIndicator>
      {faqs.map((item, index) => (
        <AccordionItem key={index} currentId={index}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const faqs = [
  {
    q: 'What payment methods are accepted?',
    a: 'We accept all major credit cards, PayPal, and Apple Pay.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Shipping times vary by location but typically take between 3-7 business days.'
  },
  {
    q: 'Can I track my order?',
    a: 'Yes, you can track your order using the tracking link provided in your shipping confirmation email.'
  }
]
