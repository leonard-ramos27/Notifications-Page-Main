import { NotificationText } from './NotificationText';
import { Image } from './Image';
import Row from 'react-bootstrap/Row';

export function Item({notification}){
    return(
      <Row className='p-2 mx-1 notification-item rounded' data-notification-status={notification.read ? "read" : "unread"}>
        <Image image_src={notification.user.photo} />
        <NotificationText name={notification.user.name} content={notification.content} timestamp={notification.timestamp}/>
        {notification.content.category == "photo" && <Image image_src={notification.content.photo} /> }
      </Row>
    )
}