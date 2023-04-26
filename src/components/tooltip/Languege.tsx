import Modal from "react-modal";

interface TooltipProps {
    isOpen: boolean;
    onHandleCloseModal: () => void;
}

function LangTooltip({ isOpen, onHandleCloseModal }: TooltipProps) {
    const styles = {
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        content: {
            margin: "0 auto",
            maxWidth: "840px",
        },
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onHandleCloseModal} style={styles}>
            <div>Quét mã QR để tải về ứng dụng</div>
        </Modal>
    );
}

export default LangTooltip;
