/**
 * Control storage data
 */
class LocalData {
  get authenticated(): boolean {
    return !!localStorage.getItem('authenticated');
  }
  set authenticated(value: boolean) {
    if (value) {
      localStorage.setItem('authenticated', 'true');
    } else {
      localStorage.removeItem('authenticated');
    }
  }
}

export const localdata = new LocalData();
