import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes'
import React from 'react'

const EditProfileModal = () => {
  return (
    <Dialog.Root>
        <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description size="2" mb="4">
            Make changes to your profile.
            </Dialog.Description>

            <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                Name
                </Text>
                <TextField.Input
                defaultValue="Freja Johnsen"
                placeholder="Enter your full name"
                />
            </label>
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                Email
                </Text>
                <TextField.Input
                defaultValue="freja@example.com"
                placeholder="Enter your email"
                />
            </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                Cancel
                </Button>
            </Dialog.Close>
            <Dialog.Close>
                <Button>Save</Button>
            </Dialog.Close>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
  )
}

export default EditProfileModal

