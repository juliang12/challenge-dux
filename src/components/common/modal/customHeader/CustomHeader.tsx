const ModalHeader = ({ onClose }: { onClose: () => void }) => (
  <div
    className="w-full flex justify-content-between items-center px-3 py-2"
    style={{ backgroundColor: "#0062ff", color: "white" }}
  >
    <span className="font-bold text-lg">Usuario</span>
    <div className="flex gap-3">
      <button className="p-link p-0 border-0 bg-transparent text-white">
        <i className="pi pi-cog text-sm" />
      </button>
      <button
        onClick={onClose}
        className="p-link p-0 border-0 bg-transparent text-white"
      >
        <i className="pi pi-minus text-sm" />
      </button>
    </div>
  </div>
);

export default ModalHeader;