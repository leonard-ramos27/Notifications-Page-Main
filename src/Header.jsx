import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export function Header({totalCount, handleClick}){
    return (
      <Row className='justify-content-between mx-1 mb-3'>
        <Col xs="auto" className='px-0'>
          <h1 className='h5 fw-bold d-inline-block'>Notifications</h1>
          <Badge className='align-top'>{totalCount}</Badge>
        </Col>
        {totalCount > 0 && <Col xs="auto" className='px-0'>
          <Button id='btn-mark-read' onClick={handleClick}>Mark all as read</Button>
        </Col>}
      </Row>
    )
}