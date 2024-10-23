import { isExcalidrawPlusSignedUser } from "../app_constants";

export const ExcalidrawPlusAppLink = () => {
  if (!isExcalidrawPlusSignedUser) {
    return null;
  }
  return (
    <a
      href={`?utm_source=k&utm_medium=app&utm_content=signedInUserRedirectButton#-redirect`}
      target="_blank"
      rel="noreferrer"
      className="plus-button"
    >
      Go to Excalidraw+
    </a>
  );
};
