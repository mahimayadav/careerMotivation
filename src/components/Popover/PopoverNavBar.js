import React, { useState } from "react";
import { Button, Popover, PopoverBody } from "reactstrap";

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
        trigger="hover"
      >
        {/* <PopoverHeader>Popover Title</PopoverHeader> */}
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum.
        </PopoverBody>
      </Popover>
    </span>
  );
};

const Accountancy = props => {
  return (
    <>
      {[
          {
            placement: "bottom",
            text: "ENGINEERING"
          },
          {
            placement: "bottom",
            text: "MEDICAL"
          },
          {
            placement: "bottom",
            text: "MANAGEMENT"
          },
          {
            placement: "bottom",
            text: "SCIENTIST"
          },
          {
            placement: "bottom",
            text: "HOTEL MANAGEMENT"
          },
        {
          placement: "bottom",
          text: "FINANCE/ACCOUNTANCY"
        },
        {
          placement: "bottom",
          text: "DOCTORAL/PHD"
        }
      ].map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />;
      })}
    </>
  );
};

export default Accountancy;