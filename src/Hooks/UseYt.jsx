import React, { useEffect, useState } from 'react'

function UseYt(channelId, apiKey) {

    const [stats,setStats] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        if(!channelId || !apiKey) return

        const fetchStats = async()=>{
            try{
                const res = await fetch(
                    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
                )
                const data = await res.json()
                console.log('YouTube API response:', data)
                const s = data.items?.[0]?.statistics
                if(s){
                     setStats({
            Subscribers: parseInt(s.subscriberCount).toLocaleString(),
            Views: parseInt(s.viewCount).toLocaleString(),
            Videos: parseInt(s.videoCount).toLocaleString(),
                    })
                }else {
        console.log('No statistics found in data', data)
      }
            }
                catch(err){
                    console.log('Fetch error:', err)
                    setError(err.message)
                }
            }
        fetchStats()
    },[channelId,apiKey]
)
  return {stats,error}
}

export default UseYt