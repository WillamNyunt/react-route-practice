import React from 'react'
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom'

export default function EditEventPage(props) {
    const data = useRouteLoaderData('event-detail')
    console.log(data)
    return (
        <EventForm method='PATCH' event={data.event} />
    )
}
