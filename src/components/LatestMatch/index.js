// Write your code here

import './index.css'

const LatestMatch = props => {
  const {parTeamDetails} = props

  return (
    <div className="Latest-match-cont">
      <div>
        <h1>{parTeamDetails.competingTeam}</h1>
        <p>{parTeamDetails.date}</p>
        <p>{parTeamDetails.venue}</p>
        <p>{parTeamDetails.result}</p>
      </div>

      <div>
        <img
          src={parTeamDetails.competingTeamLogo}
          alt={parTeamDetails.competingTeam}
          className="competing-team-logo"
        />
      </div>
      <div>
        <p>First Innings</p>
        <p>{parTeamDetails.firstInnings}</p>
        <p>Second Innings</p>
        <p>{parTeamDetails.secondInnings}</p>
        <p>Man Of the Match</p>
        <p>{parTeamDetails.manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{parTeamDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
