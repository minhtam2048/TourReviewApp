import React, { Fragment } from 'react'
import { Card, Header, Image, Button } from 'semantic-ui-react'

const UserPhotos = ({profile, photos, loading, deletePhoto, setMainPhoto}) => {

    let filteredPhotos;
    if(photos) {
        filteredPhotos = photos.filter(photo => {
            return photo.url !== profile.photoURL
        })
    }
    

    return (
        <Fragment>
            <Header sub color='teal' content='All Photos'/>

            <Card.Group itemsPerRow={5}>
                <Card>
                    <Image src={profile.photoURL || '/assets/user.png'} />
                    <Button positive>Main Photo</Button>
                </Card>

                
                { photos && filteredPhotos.map((photo, index)=> (
                    <Card key={index}>
                        <Image src={photo.url}  style={{height: 100}}/>
                        <div className='ui two buttons'>
                            <Button loading={loading}  onClick={() => setMainPhoto(photo)}  basic color='green'>Main</Button>
                            <Button onClick={() => deletePhoto(photo)} basic icon='trash' color='red' />
                        </div>
                    </Card>
                ))}
            </Card.Group>
        </Fragment>
        
    )
}

export default UserPhotos;