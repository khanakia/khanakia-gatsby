import React from "react"

// import Navbar from '../components/NavBar'
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="container pt-5">
        Sorry, we did not find what you are looking for <br />
        <a className="btn btn-primary mt-3" href="/">Go back to homepage</a>
      </div>
    </Layout>
  )
}