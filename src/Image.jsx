import Col from 'react-bootstrap/Col';
import { getImageURL } from './utils/image-util';

export function Image({image_src}){
    return (
      <Col xs="auto">
        <img src={getImageURL(image_src)} alt="Profile Image" width="50px" height="50px" />
      </Col>
    )
}