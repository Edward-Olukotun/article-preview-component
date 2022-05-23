import React from 'react'
import './Share.css'
function Share() {
    return (
        <>
            <div id='share-menu'>
                <h1>SHARE</h1>
                <img src='../images/icon-facebook.svg' alt='' />
                <img src='../images/icon-pinterest.svg' alt='' />
                <img src='../images/icon-twitter.svg' alt='' />
                <section className='last-share'>
                    <img src='../images/icon-share.svg' alt='' />
                </section>
            </div>
        </>
    )
}

export default Share