// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import HomePage from './pages/HomePage';
import EventsPage from './pages/EventPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import EventsRoot from './pages/EventsRoot';
import { loader as eventsLoader } from './pages/EventPage';
import { loader as eventDetailLoader } from './pages/EventDetailPage';
import { action as newEventAction } from './pages/NewEventPage';
import { action as deleteEventAction } from './pages/EventDetailPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Router = createBrowserRouter(
    [{
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        }
        , {
          path: '/events',
          element: <EventsRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader
            }
            ,
            {
              path: ':eventId',
              loader: eventDetailLoader,
              id: 'event-detail',
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction
                },
                {
                  path: 'edit',
                  element: <EditEventPage />
                }
              ]
            },
            {
              path: 'new',
              element: <NewEventPage />,
              action: newEventAction
            }
          ]
        }
      ]
    }
    ]);


  return <div>
    <RouterProvider router={Router} />
  </div>;
}

export default App;
