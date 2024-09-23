export type GeneralUINotificationTypes = "success" | "error";

export type GeneralUIModalConfig = {
  title: string;
  subtitle: string;
  onConfirm: () => void;
}

export type GeneralUINotificationConfig = {
  type: GeneralUINotificationTypes;
  title: string;
  description: string;
}