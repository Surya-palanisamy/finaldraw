import { isExcalidrawPlusSignedUser } from "../app_constants";

export const ExcalidrawPlusAppLink = () => {
  if (!isExcalidrawPlusSignedUser) {
    return null;
  }
  return (
    <a
      href={`?utm_&content=sitButton#-redirect`}
      target="_blank"
      rel="noreferrer"
      className="plus-button"
    >
      Go to graphiteXdraw+
    </a>
  );
};
