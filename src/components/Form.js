import React from "react"

const Form = ({getWeather}) => {
    return (
        <>
        <h1 className="md-hidden">Weather  
            <span className="dark">Finder</span>
        </h1>
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..." />
            <input type="submit" value="Get Weather"/> 
        </form>
        </>
    )
}
export default Form