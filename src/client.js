import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '4vpgqdfj',//ProcessingInstruction.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skqvhA6PuXgqV7mMQUPcu1V1w8bPqTYXJb92ZN4TjOP9C9Z2oF8I6BxNN1VhHInlhxIMHhNgWX1chKSfXwrXjX5mYwa7D7rdFtjYRLT4nu4nARITrdgSOMfK3UD1PvAp8nLe89iMSOGkv8K9cIvnW2Z9XuI4JMk4YWg7h4Il1vu9Xe157JLx'//ProcessingInstruction.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);