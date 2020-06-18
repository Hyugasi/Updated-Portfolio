import React from 'react'

function Projects(props) {
    console.log(props.projectsData.feed.entry)

    const projectsData = props.projectsData.feed.entry.map((i, key) => {
        return (
            <div>
                <div>
                    <img src={i.gsx$image.$t}/>
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