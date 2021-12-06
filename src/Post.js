import PostCard from './components/PostCard/index'
import { checkCoordinatesDistance } from './utils/checkCoordinatesDistance';


// Create a custom hook to find user's location coordinates use the above `checkCoordinatesDistance` function in ./utils/checkCoordinatesDistance to find the distance between points;
// You will find the coordinates of each post in the location field of the api response in the format : coordinates : [longitude, latitude], type : 'point'
// These are hardcoded coordinates of Jaipur and Lucknow. GPS location should be stored as lat1,lon1 and the post's location(from api response) should be stored as lat2,lon2
const lat1 = 26.9124;
const lon1 = 75.7873;
const lat2 = 26.8467;
const lon2 = 80.9462;
export default function Post(props){
    const distance = checkCoordinatesDistance(lat1,lon1,lat2,lon2);
    const milk = props.data.highestMilk ? props.data.highestMilk : props.data.currentMilk;
    const tel = `tel:${props.data.contact}`;
    return (
        <PostCard>
            <PostCard.Image src={JSON.parse(props.data.resources[0]).url} resource={JSON.parse(props.data.resources[0])}/>
            <PostCard.Group>
                <PostCard.Date>
                    <span className = "bolded">{`${parseInt(distance)} KM`}</span> from your location
                </PostCard.Date>
                <PostCard.Location>
                    {props.data.locationName.split(',')[0]}, {props.data.locationName.split(',')[1]}
                </PostCard.Location>
            </PostCard.Group>
            <PostCard.Group padding='20'>
                <PostCard.PostHeading>
                    {`${props.data.breed} ${props.data.animalType}`}
                </PostCard.PostHeading>
                <PostCard.Price>
                    {`Rs. ${props.data.price}`}
                </PostCard.Price>
            </PostCard.Group>
            <PostCard.PostDescription>{`This is a ${props.data.gender} ${props.data.breed} ${props.data.animalType} which can provide upto ${milk} litres of milk on a daily basis `}</PostCard.PostDescription>
            <PostCard.Group padding="30">
                <PostCard.PostHeading>
                    {props.data.seller}
                </PostCard.PostHeading>
                <PostCard.CallButton href={tel} src="https://static-assets.animall.in/static/images/call-card.png">
                </PostCard.CallButton>
            </PostCard.Group>
        </PostCard>
    )
}