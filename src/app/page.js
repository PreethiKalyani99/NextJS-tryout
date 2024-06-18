import { ClickMe } from "./ClickMe";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hello World</div>
      <ClickMe/><br/><br/>
      <Link href="/home">Home</Link><br/>
      <Link href="/cart">Cart</Link><br/>
      <Link href="/home/nestedRoute">Nested Route</Link>
    </>
  ); 
}
