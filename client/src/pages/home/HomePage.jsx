import React from 'react'

import Layout from '../../components/Layout'
import PostPage from '../page/PostPage'



const HomePage = () => {
    return (
        <Layout>
            <section className='flex flex-col gap-y-4'>
                <PostPage />
                <PostPage />
                <PostPage />
            </section>
        </Layout>
    )
}

export default HomePage
