'use client'

import {
  IconBook,
  IconBookOpen,
  IconBrandCopilot,
  IconBrandGithub,
  IconBuilding,
  IconChart,
  IconCodeBrackets,
  IconFilter,
  IconGear,
  IconGlobe,
  IconHeart,
  IconLogout,
  IconMessages,
  IconPeople,
  IconPerson,
  IconStar
} from '@irsyadadl/paranoid'
import React from 'react'
import { Group, Menu } from 'react-aria-components'
import {
  Avatar,
  Button,
  Checkbox,
  Description,
  MenuItem,
  MenuSection,
  MenuSeparator,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  Select,
  SelectItem,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
  TextField
} from 'ui'

export default function SheetMenuDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)
  return (
    <>
      <ModalOverlay isOpen={isOpen} onOpenChange={setIsOpen}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Edit status</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <div className="space-y-4">
              <TextField prefix={<IconBrandGithub />} label="Status" placeholder="What's your status?" />
              <Group>
                <Checkbox>Busy</Checkbox>
                <Description>
                  When others mention you, assign you, or request your review, GitHub will let them know that you have
                  limited availability.
                </Description>
              </Group>
              <Select label="Clear Status">
                <SelectItem>Never</SelectItem>
                <SelectItem>in 30 Minutes</SelectItem>
                <SelectItem>in 1 Hour</SelectItem>
                <SelectItem>in 8 Hours</SelectItem>
                <SelectItem>after Today</SelectItem>
                <SelectItem>after a Week</SelectItem>
                <SelectItem>after a Month</SelectItem>
              </Select>
              <Select label="Visible to">
                <SelectItem>Everyone</SelectItem>
                <SelectItem>Organization</SelectItem>
                <SelectItem>Public</SelectItem>
              </Select>
            </div>
          </ModalBody>
          <ModalFooter>
            <ModalClose>Clear Status</ModalClose>
            <Button onPress={closeModal}>Set Status</Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
      <Sheet>
        <SheetTrigger aria-label="Open menu">
          <Avatar src="https://github.com/irsyadadl.png" alt="irsyadadl" />
        </SheetTrigger>
        <SheetOverlay>
          <SheetContent closeButton={false}>
            <SheetHeader className="flex flex-row items-center gap-x-3 mb-2">
              <Avatar src="https://github.com/irsyadadl.png" alt="irsyadadl" />
              <div>
                <SheetTitle>irsyadadl</SheetTitle>
                <SheetDescription>Irsyad A. Panjaitan</SheetDescription>
              </div>
            </SheetHeader>
            <Menu>
              <MenuItem onAction={openModal}>
                <IconBrandGithub />
                Edit Status
              </MenuItem>
              <MenuSeparator />
              <MenuSection>
                <MenuItem>
                  <IconPerson />
                  Your profile
                </MenuItem>
                <MenuItem>
                  <IconBook /> Your repositories
                </MenuItem>
                <MenuItem>
                  <IconBrandCopilot /> Your Copilot
                </MenuItem>
                <MenuItem>
                  <IconChart /> Your projects
                </MenuItem>
                <MenuItem>
                  <IconStar /> Your stars
                </MenuItem>
                <MenuItem>
                  <IconCodeBrackets /> Your gists
                </MenuItem>
                <MenuItem>
                  <IconBuilding /> Your organizations
                </MenuItem>
                <MenuItem>
                  <IconGlobe /> Your enterprises
                </MenuItem>
                <MenuItem>
                  <IconHeart />
                  Your sponsors
                </MenuItem>
              </MenuSection>
              <MenuSeparator />
              <MenuSection>
                <MenuItem>
                  <IconFilter /> Feature preview
                </MenuItem>
                <MenuItem>
                  <IconGear />
                  Settings
                </MenuItem>
              </MenuSection>
              <MenuSeparator />
              <MenuSection>
                <MenuItem>
                  <IconBookOpen /> GitHub Docs
                </MenuItem>
                <MenuItem>
                  <IconPeople /> GitHub Support
                </MenuItem>
                <MenuItem>
                  <IconMessages /> GitHub Community
                </MenuItem>
              </MenuSection>
              <MenuSeparator />
              <MenuItem>
                <IconLogout /> Sign out
              </MenuItem>
            </Menu>
          </SheetContent>
        </SheetOverlay>
      </Sheet>
    </>
  )
}
