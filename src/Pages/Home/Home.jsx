import React from 'react'
import { HomeMain } from '../../Layouts/HomeMain/HomeMain'
import { Header } from '../../Layouts/Header/Header'
import { TaskProvider } from '../../Context/Context/Context'

export const Home = () => {
  return (
    <>
    <Header />
    <TaskProvider>
    <HomeMain />
    </TaskProvider>
    </>
  )
}
