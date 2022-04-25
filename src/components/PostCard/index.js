import {
    CallButton,
    CallButtonImage,
    Container,
    Date,
    Group,
    Image,
    Image1,
    Image2,
    Image3,
    Location,
    PostDescription,
    PostHeading,
    Price,
    Resources
} from './styles/post';

export default function PostCard({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

PostCard.PostHeading = function PostCardPostHeading({ children, ...restProps }) {
    return <PostHeading {...restProps}>{children}</PostHeading>
}

PostCard.Resources = function PostCardResources({ children, ...restProps }) {
    return <Resources {...restProps}>{children}</Resources>
}

PostCard.Image = function PostCardImage({ children, resource, ...restProps }) {
    return <Image {...restProps}>{children}</Image>
}
PostCard.Image1 = function PostCardImage1({ children, resource, ...restProps }) {
    return <Image1 {...restProps}>{children}</Image1>
}
PostCard.Image2 = function PostCardImage2({ children, resource, ...restProps }) {
    return <Image2 {...restProps}>{children}</Image2>
}
PostCard.Image3 = function PostCardImage3({ children, resource, ...restProps }) {
    return <Image3 {...restProps}>{children}</Image3>
}
PostCard.PostDescription = function PostCardPostDescription({ children, ...restProps }) {
    return <PostDescription {...restProps}>{children}</PostDescription>
}
PostCard.Group = function PostCardGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}
PostCard.Price = function PostCardPrice({ children, ...restProps }) {
    return <Price {...restProps}>{children}</Price>
}
PostCard.CallButtonImage = function PostCardCallButtonImage({ children, ...restProps }) {
    return <CallButtonImage {...restProps}>{children}</CallButtonImage>
}
PostCard.CallButton = function PostCardCallButton({ children, src, ...restProps }) {
    return <CallButton {...restProps}><CallButtonImage src={src} /></CallButton>
}
PostCard.Date = function PostCardDate({ children, ...restProps }) {
    return <Date {...restProps}>{children}</Date>
}
PostCard.Location = function PostCardLocation({ children, ...restProps }) {
    return <Location {...restProps}>{children}</Location>
}
