import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default (props: Props) => {
  return (
    <div className="text-lg font-bold bg-amber-400 text-amber-100 rounded-2xl p-3">
      {props.children}
    </div>
  );
};
