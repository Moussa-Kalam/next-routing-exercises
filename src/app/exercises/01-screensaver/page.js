import React from 'react'
import Link from 'next/link'

function ScreenSaverExercise () {
  return (
    <>
      <h1>Choose your color:</h1>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/lavender">lavender</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/staleblue">staleblue</Link>
        </li>

        <li><Link href="/exercises/01-screensaver/hotpink">hotpink</Link></li>

        <li><Link href="/exercises/01-screensaver/white">white</Link></li>
      </ul>
    </>

  )
}

export default ScreenSaverExercise
