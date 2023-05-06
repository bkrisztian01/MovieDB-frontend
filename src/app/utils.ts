export default class Utils {
  /**
   * Format the number of minutes into '${h}h ${m}m' format.
   * @param minutes - The minutes
   * @returns The formatted text.
   */
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

  /**
   * Returns the year from the date string.
   * @param dateString - The date in string
   * @returns The year
   */
  static dateStringToYear(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }
}
