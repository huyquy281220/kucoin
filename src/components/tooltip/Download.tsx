import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function DownloadTooltip() {
    return (
        <Tooltip id="download" clickable noArrow className="z-50">
            <div className="py-4 px-5">
                <p>Quét mã QR để tải về ứng dụng</p>
            </div>
        </Tooltip>
    );
}

export default DownloadTooltip;
