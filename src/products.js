import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function Products() {
  let navigate = useNavigate()
  return (
    <div>
        <h1 style={{textAlign:"center"}}>This is my Product page.</h1>
        <Link to="/">Back to Homepage</Link><br />
        <button onClick={() => navigate("/")}>Reditrect</button>
    </div>
  )
}
