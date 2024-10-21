import { Button } from "./ui/button";

export const Header = () => {
  return <div className="flex items-center justify-between w-full px-3 py-3 bg-floral-white">
    <div>Logo Icon</div>
    <div className="flex flex-row gap-5 font-semibold">
      <p>Home</p>
      <p>Our Services</p>
      <p>My Order</p>
      <p>About</p>
    </div>
    <div className="flex flex-row gap-2">
      <Button size={'sm'}>Login</Button>
      <Button size={'sm'}>Register</Button>
    </div>
  </div>;
};
