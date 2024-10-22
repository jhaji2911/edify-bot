import { PersonaOptions } from '@nlux/react';
import bluebenzLogo from '../assets/bblogo.png'
import ceo from '../assets/ceo.webp'

export const personas: PersonaOptions = {
    assistant: {
        name: 'BBD Chat',
        avatar: bluebenzLogo,
        tagline: 'Smart and trustworthy assistant, search across your manufacturing data',
    },
    user: {
        name: 'Bhaswar',
        avatar: ceo,
    }
};