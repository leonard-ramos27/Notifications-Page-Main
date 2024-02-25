import Col from 'react-bootstrap/Col';

export function NotificationText({name, content, timestamp}){
    return (
      <Col className='px-0'>       
        <p className='notifications-text m-0'>
          <span className='pe-1 notifications-text-name'>{name}</span>
          {content.text}
          {content.category == "post" && <span className='ps-1 notifications-text-post-name'>{content.post}</span>}
          {content.category == "group" && <span className='ps-1 notifications-text-group-name'>{content.group}</span>}
        </p>
        <span className='notifications-timestamp'>{timestamp}</span>
        {content.category == "message" && 
          <div className='border rounded my-2 p-3 notifications-text-reply'>
            <p className='m-0'>
              {content.message}
            </p>
          </div>
        }
      </Col>
    )
}