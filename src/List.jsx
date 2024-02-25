import Stack from 'react-bootstrap/Stack';
import { Item } from './Item';

export function List({data}){
    return (
      <Stack gap={2}>
        {data.map(notification => {
          return (<Item notification={notification} key={notification.key}/>)
        })}
      </Stack>
    )
}