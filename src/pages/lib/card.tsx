import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { followPerson } from '../../actions/people-actions';

// all card props required
type CardProps = {
  name: string,
  year: string,
  gender: string,
  home: string,
  role: string,
  picture: string,
  quote: string,
  follow: string
}

// card functional component for DALI member profile
export const Card:FC<CardProps> = ({ 
    name, 
    year,
    home,
    role,
    picture,
    quote,
    follow}: CardProps) => {

    const dispatch = useDispatch();
    
    // handles follow/unfollow instance using dispatch to actions hook
    const followFunc = (name) => {
        dispatch(followPerson(name))
    };

    // render button based on whether person is followed or not
    const renderFollowButton = () => {
        if (follow === '1') {
            return (<button type="button" onClick={() => followFunc(name)}><span id="plus">&#10005;</span></button>);
        } else {
            return (<button type="button" onClick={() => followFunc(name)}><span id="plus">&#43;</span></button>);
        }
    }
    
    return (
    <div className="card" id="person">
        <div className="row-container" id="card-container">
        <div className="img-container">
            <img src={picture} />
        </div>
        <div className="profile-bio">
            <div className="row-container" id="card-title-container">
                <h2>{ name }</h2>
                {renderFollowButton()}
            </div>
            <div>
                <div className="profile-info">
                    <span className="info-title">Year:</span> { year }
                </div>
                <div className="profile-info">
                    <span className="info-title">Hometown:</span> { home }
                </div>
                <div className="profile-info">
                    <span className="info-title">Role:</span> { role }
                </div>
                <div className="profile-info">
                    <span className="info-title">Quote:</span> { quote }
                </div>
            </div>
        </div>
    </div>
    </div>
)};