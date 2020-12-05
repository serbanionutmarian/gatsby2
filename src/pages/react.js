import React, { Component, useState } from 'react'
import Layout from '../components/Layout/Layout';

export default () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter+1);
    }

    return (
        <Layout>
            <div>
                <h1>react page..</h1>
                <h1>{counter}</h1>
                <button onClick={increment}>increase</button>
            </div>
        </Layout>
    )
}
