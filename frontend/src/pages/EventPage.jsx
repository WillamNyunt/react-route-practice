import { useEffect, useState } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {

  return (
    <>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;