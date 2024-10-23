import { shield } from "../../packages/excalidraw/components/icons";
import { Tooltip } from "../../packages/excalidraw/components/Tooltip";
import { useI18n } from "../../packages/excalidraw/i18n";

export const EncryptedIcon = () => {
  const { t } = useI18n();

  return (
    <a
      className="encrypted-icon tooltip"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("encrypted.link")}
    >
      <Tooltip label={t("encrypted.tooltip")} long={true}>
        {shield}
      </Tooltip>
    </a>
  );
};
