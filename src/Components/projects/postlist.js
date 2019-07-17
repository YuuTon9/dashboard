import React from 'react'
import PostSummary from './postsummary'
import { Link } from 'react-router-dom'

const PostList = ({projects}) => {
    return (
        <div className="post-list section">
            { projects && projects.map(project => {
                return (
                    <Link to={'/project/' + project.id}>
                        <PostSummary project={project} key={project.id} />
                    </Link>
                )
            })}
        </div>

    )
}

export default PostList