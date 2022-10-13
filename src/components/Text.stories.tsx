import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Tchuben',
        size: 'md',
    },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {

}