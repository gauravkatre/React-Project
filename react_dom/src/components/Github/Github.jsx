import React, { use } from "react";
import { useLoaderData } from "react-router-dom";
function GithubInfo() {
    
        const data=useLoaderData()
    return (
     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    )
}

export default GithubInfo

export const githubinfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
