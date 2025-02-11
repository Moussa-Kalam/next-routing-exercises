import ScreenSaver from '../../../../components/ScreenSaver'
import React from 'react'

async function Page ({ params }) {
  const { color } = await params
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={color}/>
    </main>
  )
}

export default Page