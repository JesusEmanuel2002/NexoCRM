// Modelo para representar una opción visual en la pantalla de configuración
export interface SettingsOption {
  id: string;
  label: string;
  onPress: () => void;
}