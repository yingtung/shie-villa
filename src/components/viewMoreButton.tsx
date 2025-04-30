import { Button } from "@headlessui/react";
import { Link } from "gatsby";
import React from "react";

interface ViewMoreButtonProps {
  linkTo: string;
}

const ViewMoreButton: React.FC<ViewMoreButtonProps> = ({ linkTo }) => {
  return (
    <Link to={linkTo}>
      <Button className="py-2 px-4 text-lg">瞭解更多</Button>
    </Link>
  );
};

export default ViewMoreButton;
