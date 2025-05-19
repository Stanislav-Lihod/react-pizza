import { useDispatch } from "react-redux";
import { removeItem } from "../../slices/cartSlice";
import Button from "../../ui/Button";

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch(removeItem(pizzaId));
      }}
      type="small"
    >
      Delete
    </Button>
  );
}
