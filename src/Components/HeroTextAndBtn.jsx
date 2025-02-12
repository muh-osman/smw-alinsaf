import style from "./HeroTextAndBtn.module.scss";
import { Link } from "react-router-dom";
//
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const css = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function HeroTextAndBtn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={css}>
          <div className={style.modal_box}>
            <div style={{ borderRight: "1px solid #eee" }}>
              <Link to="jeddah">جدة</Link>
            </div>
            <div style={{ borderLeft: "1px solid #eee" }}>
              <Link to="riyadh">الرياض</Link>
            </div>
          </div>
        </Box>
      </Modal>

      <div className={style.container}>
        <div>
          <h1>شريكك القانوني الموثوق</h1>
          <h5>نحقق العدالة بالخبرة ونحقق الإنصاف بالجدارة</h5>
        </div>
        <div className={style.btn_container}>
          <Link to="/contact">اتصل بنا</Link>
          <button onClick={handleOpen}>احجز الآن</button>
        </div>
      </div>
    </>
  );
}
