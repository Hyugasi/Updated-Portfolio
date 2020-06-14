import React, { useEffect, useState } from 'react'

function Projects() {
    const [projectsData, setProjectsData] = useState([])

    useEffect(() => {
        const id = `14G7FymaxpdAgNrQGA0VjtZpni3n6LBznLBRQ9fuUbrc`
        const projectsUrl = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`
        const makeAPICall = async () => {
            const res = await fetch(projectsUrl)
            const json = await res.json()
            setProjectsData(json)
            console.log(json)
        }
        makeAPICall()
    }, [])

    const mappedProjects = projectsData.map((projects, e) => {
        return (
            <div key={e}>
                <img />
                <h1>{projects.feed.entry.category}</h1>
                <p></p>
            </div>
        )
    })
    return (
        <div>
            Projects
        </div>
    )
}

export default Projects