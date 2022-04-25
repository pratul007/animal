import PostCard from './components/PostCard/index'
import { checkCoordinatesDistance } from './utils/checkCoordinatesDistance';
import { useState } from "react";

// Task 1: Form the photo/video layout based on the available resources from `props.data.resources` (Refer notion link)

// Task 2: Show the distance of the post from the user’s location
// 1. Create a custom hook to find user's location (ask for GPS permission)
// 2. Coordinates of each post is available in the `props.data.location` (Format:- coordinates:[longitude, latitude])
// 3. Supply both the latitude and longitude to checkCoordinatesDistance() util function to get the distance in kilometers

export default function Post(props) {
    const [userCoordinates, setUserCoordinates] = useState({ 'lat': null, "lon": null })
    // Checking is geolocation is enabled for the user or not.
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let coordinateObject = {
                'lat': position.coords.latitude,
                'lon': position.coords.latitude
            }
            setUserCoordinates(coordinateObject)
        });
    }

    const distance = checkCoordinatesDistance(userCoordinates.lat, userCoordinates.lon, JSON.parse(props.data.location).coordinates[0], JSON.parse(props.data.location).coordinates[1]);
    const milk = props.data.highestMilk ? props.data.highestMilk : props.data.currentMilk;
    const tel = `tel:${props.data.contact}`;
    let resLent = props.data.resources.length;
    console.log(resLent)
    return (
        <PostCard>
            {resLent === 4 ? <div className='container'>
                <PostCard.Resources>
                    {
                        props.data.resources ? props.data.resources.map(resources => {
                            return <PostCard.Image3 src={JSON.parse(resources).url} resource={JSON.parse(resources)} />
                        }) : null
                    }
                </PostCard.Resources>
            </div> :
                resLent === 3 ? <div className='container'>
                    <PostCard.Resources>
                        {
                            props.data.resources ? props.data.resources.map(resources => {
                                return <PostCard.Image2 src={JSON.parse(resources).url} resource={JSON.parse(resources)} />
                            }) : null
                        }
                    </PostCard.Resources>
                </div> :
                    resLent === 2 ? <div className='container'>
                        <PostCard.Resources>
                            {
                                props.data.resources ? props.data.resources.map(resources => {
                                    return <PostCard.Image1 src={JSON.parse(resources).url} resource={JSON.parse(resources)} />
                                }) : null
                            }
                        </PostCard.Resources>
                    </div> :
                        resLent === 1 ?
                            <div className='container'>
                                <PostCard.Resources>
                                    {
                                        props.data.resources ? props.data.resources.map(resources => {
                                            return <PostCard.Image src={JSON.parse(resources).url} resource={JSON.parse(resources)} />
                                        }) : null
                                    }
                                </PostCard.Resources>
                            </div> : null}

            <PostCard.Group>
                <PostCard.Date>
                    <span className="bolded">{`${parseInt(distance)} KM`}</span> from your location
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
