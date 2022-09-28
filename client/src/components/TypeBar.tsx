import { FC, useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';

export const TypeBar: FC = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
