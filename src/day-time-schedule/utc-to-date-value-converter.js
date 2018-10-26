export class UtcToDateValueConverter {
  toView(utcDate) {
    let date = new Date(utcDate);
    let dateOnly = date.toLocaleString().split(' ')[0];
    return dateOnly;
  }
}
