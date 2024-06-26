import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button
        className="mr-1"
        id={"Popover-" + id}
        type="button"
        color="white"
      >
        {item.text}
      </Button>
      <Popover
        placement={item.placement}
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
        
      >
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </span>
  );
};

const SCIENTIST = props => {
  return (
    <>
      {[
        {
          placement: "bottom",
          text: "SCIENTIST"
        }
      ].map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />;
      })}
    </>
  );
};

export default SCIENTIST;