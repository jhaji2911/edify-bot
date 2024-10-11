import { PersonaOptions } from '@nlux/react';
import logo from '../assets/logo.png'
const userAvatar = 'https://docs.nlkit.com/nlux/images/personas/marissa.png';

export const personas: PersonaOptions = {
    assistant: {
        name: 'Second Brain',
        avatar: logo,
        tagline: 'Smart and trustworthy assistant.',
    },
    user: {
        name: 'Bhaswar',
        avatar: userAvatar,
    }
};