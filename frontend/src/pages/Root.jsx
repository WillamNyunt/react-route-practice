import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
    

    return (
        <>
            <h1>
                Root Page
            </h1>
            <MainNavigation />
            <Outlet />
        </>
    )
}
