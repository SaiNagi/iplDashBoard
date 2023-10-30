import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamData: [], isLoading: true, teamId: ''}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const latestMatch = data.latest_match_details

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: latestMatch.umpires,
        result: latestMatch.result,
        manOfTheMatch: latestMatch.man_of_the_match,
        id: latestMatch.id,
        date: latestMatch.date,
        venue: latestMatch.venue,
        competingTeam: latestMatch.competing_team,
        competingTeamLogo: latestMatch.competing_team_logo,
        firstInnings: latestMatch.first_innings,
        secondInnings: latestMatch.second_innings,
        matchStatus: latestMatch.match_status,
      },
      recentMatches: data.recent_matches.map(item => ({
        umpires: item.umpires,
        result: item.result,
        manOfTheMatch: item.man_of_the_match,
        id: item.id,
        date: item.date,
        venue: item.venue,
        competingTeamLogo: item.competing_team_logo,
        competingTeam: item.competing_team,
        firstInnings: item.first_innings,
        secondInnings: item.second_innings,
        matchStatus: item.match_status,
      })),
    }
    this.setState({teamData: updatedData, isLoading: false, teamId: id})
  }

  render() {
    const {teamData, isLoading, teamId} = this.state
    return (
      <div className={`team-container-${teamId}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div>
              <img
                src={teamData.teamBannerUrl}
                alt={teamId}
                className="team-image"
              />
            </div>
            <div className="latest-match">
              <LatestMatch parTeamDetails={teamData.latestMatchDetails} />
            </div>

            <ul className="recent-matches">
              {teamData.recentMatches.map(item => (
                <MatchCard matchesDetails={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
