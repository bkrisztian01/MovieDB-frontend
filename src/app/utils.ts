export default class Utils {
  static formatMinutes(minutes: number): string {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    let hString = '';
    let mString = '';
    if (h > 0) {
      hString += h + 'h';
    }
    if (m > 0) {
      mString += m + 'm';
    }

    return `${hString} ${mString}`.trim() || '0m';
  }

  static dateStringToYear(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }
}
