import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

export default function EventsRoot(props) {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
}
