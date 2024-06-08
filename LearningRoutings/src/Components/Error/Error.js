import React from 'react'
import {useRouteError} from "react-router-dom";

const Error = () => {
    const erroData = useRouteError()
    console.log(erroData);
  return (
    <div>Error</div>
  )
}

export default Error