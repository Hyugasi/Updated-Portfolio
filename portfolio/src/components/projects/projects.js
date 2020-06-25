import React from 'react'

function Projects(props) {
    console.log(props.projectsData.feed.entry)

    const projectsData = props.projectsData.feed.entry.map((i, key) => {
        return (
            <div>
                <div key={key}>
                    <a href={i.gsx$url.$t} target="_blank" >
                        <img src={i.gsx$image.$t}/>
                    </a>
                        <h1>{i.gsx$title.$t}</h1>
                        <h3>{i.gsx$description.$t}</h3>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            {projectsData}
        </div>
    )
}

export default Projects