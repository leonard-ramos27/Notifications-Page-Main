import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { List } from './List';
import { Header } from './Header';
import { getNotifications } from './data/notification-data';

function App() {
  const notifications_data = getNotifications()
  const [notifications, setNotifications] = useState(notifications_data)
  const [totalCount, setTotalCount] = useState(notifications_data.filter((obj)=> obj.read == false).length)

  function markAllasRead(){
    const newNotifications = notifications.map( notif => {
      if(!notif.read){
        return {...notif, read: true}
      }
      return notif
    })
    setNotifications(newNotifications)
    setTotalCount(0)
  }

  return (
    <Container fluid="md" className='bg-white p-4 rounded shadow-sm'>
      <Header totalCount={totalCount} handleClick={markAllasRead}/>
      <List data={notifications}/>
    </Container>
  )
}

export default App
