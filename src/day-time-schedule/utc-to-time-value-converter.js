export class UtcToTimeValueConverter {
  toView(utcDate) {
    let date = new Date(utcDate);
    let time = `${date.toLocaleTimeString().slice(0, -3)}`;
    return time;
  }
}
