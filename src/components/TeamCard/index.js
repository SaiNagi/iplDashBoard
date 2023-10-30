// Write your code here

import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props

  return (
    <li className="list-item-container">
      <Link className="link-style" to={`/team-matches/${teamDetails.id}`}>
        <img
          src={teamDetails.teamImageUrl}
          alt={teamDetails.name}
          className="ipl-team-logo"
        />
        <p>{teamDetails.name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
