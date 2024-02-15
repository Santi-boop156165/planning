import PropTypes from "prop-types";
import Button from "../atoms/Buttons/Button";
import Input from "../atoms/Iinput/Input";
import toast from "react-hot-toast";
import MESSAGES from "../../shared/messages";
const PopupSharedLink = ({ onClose }) => {
  const handleCopy = async (e) => {
    e.preventDefault();
    const url = window.location.href;
    console.log(url);
    try {
      await navigator.clipboard.writeText(url);
      toast.success(MESSAGES.URL_COPIED);
    } catch (err) {
      console.error(MESSAGES.ERROR_COPYING_URL, err);
    }
  };
  return (
    <>
      <form className="popup-shared-style">
        <div className="container-popup-shared">
          <span className="text-white text-xl font-semibold">
            Invitar jugadores
          </span>
          <button onClick={onClose} className="text-white text-xl ">
            X
          </button>
        </div>
        <div className="section-popup-shared">
          <section className="flex flex-col gap-1">
            <Input
              size={"w-96"}
              value={window.location.href}
              readOnly={true}
              bgColor={"bg-[#240f4a]"}
            />
          </section>

          <fieldset className="flex flex-row space-x-4">
            <Button
              text="Copiar Link"
              textSize={"text-lg"}
              bgColor={"bg-white"}
              textColor={"text-purple-900"}
              higth={"h-10"}
              pySize={"px-4"}
              onClick={(e) => handleCopy(e)}
            />
          </fieldset>
        </div>
      </form>
    </>
  );
};
PopupSharedLink.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default PopupSharedLink;
