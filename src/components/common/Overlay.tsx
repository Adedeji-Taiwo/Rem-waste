import { SkipItemsType } from "../../types/main";

const Overlay = ({selectedSkip}: {selectedSkip: SkipItemsType | null}) => {
  if (!selectedSkip) return null;

  return (
    <div className="bg-black opacity-50 fixed inset-0 z-40 w-full h-full"></div>
  );
};

export default Overlay;
