import { useDispatch } from "react-redux";
import { decCounterItem, incCounterItem } from "../../slices/cartSlice";
import Button from "../../ui/Button";

export default function UpdateQuantity({ id, counter }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="circle"
        onClick={() => {
          dispatch(incCounterItem(id));
        }}
      >
        +
      </Button>
      {counter}
      <Button
        type="circle"
        onClick={() => {
          dispatch(decCounterItem(id));
        }}
      >
        -
      </Button>
    </div>
  );
}
