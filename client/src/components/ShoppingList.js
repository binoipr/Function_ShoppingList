import { ListGroup, ListGroupItem, Container, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";

function ShoppingList() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const dispatch = useDispatch();
  useEffect(() => {
    Items: dispatch(getItems());
  });

  const onDeleteClick = (id) => {
    dispatch(deleteItem(id));
  };

  const Items = useSelector((state) => state.item.Items);
  console.log(Items);
  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {Items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                {isAuthenticated ? (
                  <Button
                    color="danger"
                    className="remove-btn"
                    onClick={onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                ) : null}
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
}

export default ShoppingList;
