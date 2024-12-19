import Toast, { ToastType } from 'react-native-toast-message';

export function showToast(type: ToastType, heading: string, message: string) {
  Toast.show({ type, text1: heading, text2: message });
}

export function showErrorToast(heading: string, message: string) {
  showToast('error', heading, message);
}

export function showSuccessToast(heading: string, message: string) {
  showToast('success', heading, message);
}

export function showInfoToast(heading: string, message: string) {
  showToast('info', heading, message);
}
