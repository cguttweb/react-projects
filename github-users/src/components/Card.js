import React from 'react'

const Card = (props) => {
  return (
    <div>
    <div>
        <div>
            <div>
                <img src={props.avatar_url} alt="" />
            </div>
            <div>
                 <h3>
                     {props.name}
                 <span>
                     @{props.login}
                 </span>
                 </h3>
                 <p>
                     {props.public_repos} repositories. User since {props.created_at.slice(0,4)}
                 </p>
                 <p>
                    {props.location || ''}
                 </p>
                 <p>
                    {props.bio}
                 </p>
            </div>
        </div>
    </div>
    <div>
        <span>
            <a href={props.html_url}>
            <button type="button">
                <span>Profile</span>
             </button>
            </a>
            <a href={props.blog}>
            <button type="button">
                <span>Website</span>
            </button>
            </a>
        </span>
    </div>
 </div>
  )
}

export default Card
