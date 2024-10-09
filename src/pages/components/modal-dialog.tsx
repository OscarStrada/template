import Button from "./button";

type ModalDialogProps = {
  onClose: () => void;
};

function ModalDialog({ onClose }: ModalDialogProps) {
  return (
    <div className="modal-dialog">
      <div className="content">Modal content</div>
      <div className="footer">
        <Button onClick={onClose}>Close dialog</Button>
      </div>
    </div>
  );
}

export default ModalDialog;
