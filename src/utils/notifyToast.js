import { Flip, toast } from "react-toastify";

const notifyToast = () => {
  return toast.error("Please enter a value before submitting.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  });
};

export default notifyToast;
