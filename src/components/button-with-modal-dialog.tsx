import { useState } from "react";

import Button from "./button";
import ModalDialog from "./modal-dialog";

function ButtonWithModalDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open modal dialog</Button>

      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
}

export default ButtonWithModalDialog;
