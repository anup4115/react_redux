import { useSelector } from "react-redux";


export default function Coin() {
    const coin =useSelector((state)=>state.counter.count)
  return (
    <>
      <span>____Coin: {coin}____</span>
    </>
  )
}
