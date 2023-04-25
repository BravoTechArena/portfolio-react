import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient ({
    projectId: '18fujld5',
    dataset: 'production',
    apiVersion: '2023-04-11',
    useCdn: true,
    token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)