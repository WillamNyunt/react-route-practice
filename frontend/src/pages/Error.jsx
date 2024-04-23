import React from 'react'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    let title = 'Something went wrong.'
    let message = 'An error has occured.'

    console.log(error)

    if (error.status === 404) {
        message = 'The requested page could not be found.'
    } else if (error.status === 500) {
        message = error.data.message
    }

    return (
            <PageContent title={title}>
                <p>
                    {message}
                </p>
            </PageContent>
    )
}
