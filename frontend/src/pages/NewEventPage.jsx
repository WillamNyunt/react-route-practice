import React from 'react'
import EventForm from '../components/EventForm'
import { json, redirect } from 'react-router-dom';

export default function NewEventPage(props) {
    return (
        <EventForm />
    )
}

export async function action({ request }) {
    const data = await request.formData();
    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description'),
    }
    const response = fetch('http://localhost:8080/events', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(eventData)
    });
    if (!response.ok) {
        throw json({ message: 'Could not save event.' }, { status: 500 })
    }
    return redirect('/events');
}