import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

export default function RootLayout() {
    const navigation = useNavigation()

    return (
        <>
            <h1>
                Root Page
            </h1>
            <MainNavigation />
            <main>
                {navigation.state === 'loading' && <p>Loading...</p>}
                <Outlet />
            </main>
        </>
    )
}
