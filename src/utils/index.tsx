import "./index.css";
import { ReactNode, Suspense } from "react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

const SuspenseComponent = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export { Loading };
export default SuspenseComponent;
