import React from 'react'
import EventsList from '../components/EventsList'
import DUMMY_EVENTS  from '../data/dummyEvents'
export default function EventsPage(props) {
    return (
        <>
            <h1>Events</h1>
            <EventsList events={DUMMY_EVENTS} />
        </>
    )
}
