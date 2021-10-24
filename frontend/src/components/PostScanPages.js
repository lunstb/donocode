import React, { useEffect } from 'react'
import { Redirect, useParams } from 'react-router-dom'

function PostScanPages() {
    let { qrId } = useParams()    

    useEffect(() => {
        fetch('api/qr/getstatus/' + qrId)
        .then(res => res.json())
        .then(qrStatus => {
            if (qrStatus === 0)
                return <Redirect to={"/donor/greeting/"+qrId}/>
            else if (qrStatus === 1)
                return <Redirect to={"/recipient/greeting"+qrId}/>
            else if (qrStatus === 2)
                return <Redirect to={"/"}/>
        })
    }, [])


    return (
        <div>
            Loading...
        </div>
    )
}

export default PostScanPages
