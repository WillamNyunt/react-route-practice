import React from 'react'
import EventItem from '../components/EventItem'
import { json, useRouteLoaderData } from 'react-router-dom'

export default function EventsDetailPage(props) {
    const data = useRouteLoaderData('event-detail')
    console.log(data)
    return (
        <>
            <h1>
                Events Detail Page
            </h1>
            <EventItem event={data.event} /> 
        </>
    )
}

export async function loader({params}) {
    console.log(params)
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`)
    if (!response.ok) {
        throw json({
            message: 'Failed to load event.',
            status: 500
        })
    } else {
        console.log(response)
        return response
    }
}