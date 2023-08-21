import React from 'react'
import { Puff } from 'react-loader-spinner'

function Loader() {
  return (
    <div 
      style={{
          width : "100%",
          height : "1000px",
          display : "flex",
          justifyContent : "center",
          marginTop : "50px"
        }}
    >
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#009688"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>
  )
}

export default Loader