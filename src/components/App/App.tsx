import React, { useState } from 'react'
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom'
import About from '@/pages/about/About'
import avatarPng from '@/assets/avatar.png'
import avatarJpg from '@/assets/avatar.jpg'
import Dog from '@/assets/avatar.svg'

// TREE SHAKING
function TODO(a: number) {
    console.log('TODOFUNCTION')
}

export const App = () => {
    const [count, setCount] = useState<number>(0)
    const increment = () => setCount(prev => prev + 1)

    // TODO('12366123')

    // if (__PLATFORM__ === 'desktop') {
    //     return <div>It`s desktop platform</div>
    // }

    // if (__PLATFORM__ === 'mobile') {
    //     return <div>It`s mobile platform</div>
    // }

    // if (__ENV__ === 'development') {
    //     // addDevtools()
    // }

    return (
        <div data-testid={'App.DataTestId'}>
            <div>
                Bebebebe new
                <h2 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h2>
                <img src={avatarPng} alt="Avatar" />
                <img src={avatarJpg} alt="Avatar" />
                <div>
                    <Dog width={32} height={32} fill={'green'} />
                </div>
            </div>
            <Link to={'/about'}>about</Link>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count} <span>Bebe</span></h1>
            <button className={classes.button} onClick={increment}>Add bebu</button>
            <About />
        </div>
    )
}