// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchesDetails} = props

  return (
    <div className="recent-match-card">
      <img
        src={matchesDetails.competingTeamLogo}
        alt={matchesDetails.competingTeam}
        className="recent-image"
      />
      <h1>{matchesDetails.competingTeam}</h1>
      <p>{matchesDetails.result}</p>
      <p
        className={
          matchesDetails.matchStatus === 'Won' ? 'status-red' : 'status-green'
        }
      >
        {matchesDetails.matchStatus}
      </p>
    </div>
  )
}

export default MatchCard
