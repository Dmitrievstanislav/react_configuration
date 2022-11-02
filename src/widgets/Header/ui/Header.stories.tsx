import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Header} from './Header';

export default {
  title: 'widget/Header',
  component: Header,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
