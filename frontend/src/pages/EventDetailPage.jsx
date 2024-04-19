import React from 'react'
import EventItem from '../components/EventItem'
import { useParams } from 'react-router-dom'
import DUMMY_EVENTS from '../data/dummyEvents'

export default function EventsDetailPage(props) {
    const params = useParams()
    const event = DUMMY_EVENTS.find(event => event.id === params.id)

    return (
        <>
            <h1>
                Events Detail Page
            </h1>
            <EventItem event={event} /> 
        </>
    )
}
