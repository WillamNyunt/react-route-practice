import React from 'react'
import EventItem from '../components/EventItem'
import { json, useRouteLoaderData, redirect } from 'react-router-dom'

export default function EventsDetailPage(props) {
    const data = useRouteLoaderData('event-detail')
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
        return response
    }
}

export async function action({params, request}) {
    console.log(request.method)
    const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {method: request.method})
    if (!response.ok) {
        throw json({
            message: 'Could not delete event',
            status: 500
        })
    } else {
        return redirect('/events');
    }
}