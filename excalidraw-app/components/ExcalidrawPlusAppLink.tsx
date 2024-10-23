import { isExcalidrawPlusSignedUser } from "../app_constants";

export const ExcalidrawPlusAppLink = () => {
  if (!isExcalidrawPlusSignedUser) {
    return null;
  }
  return (
    <a
      href={`?utm_&utm_content=signerRedirectButton#-redirect`}
      target="_blank"
      rel="noreferrer"
      className="plus-button"
    >
      Go to graphiteXdraw+
    </a>
  );
};
