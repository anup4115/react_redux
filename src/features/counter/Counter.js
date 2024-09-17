import { useSelector,useDispatch } from "react-redux"
import { increment,decrement } from "./counterSlice"
export default function Counter() {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
  return (
    <>
      <button onClick={()=>dispatch(increment())}>+</button>
      <span>____Count: {count}____</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
}
