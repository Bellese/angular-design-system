import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "sorting",
    pure: true
})
export class SortingPipe implements PipeTransform {
  event;
  asc;
  colHeader;

  transform(items: any[], event: any): any[] {

    if (!items) return [];
    if (event) this.colHeader = event.e.target.id;

    return items.sort((a, b) => {
      if (this.colHeader) {
        let valA;
        let valB;
        a[this.colHeader].el === "date"
          ? (valA = new Date(a[this.colHeader].value))
          : (valA = a[this.colHeader].value);
        b[this.colHeader].el === "date"
          ? (valB = new Date(b[this.colHeader].value))
          : (valB = b[this.colHeader].value);

          if(valA.toLowerCase() === 'n/a') {
            valA = '0'
          }

          if(valB.toLowerCase() === 'n/a') {
            valB = '0'
          }

          if (valA.indexOf("%") !== -1) {
            valA = Number(valA.replace('%', ""));
          }

          if (valB.indexOf("%") !== -1) {
            valB = Number(valB.replace('%', ""));
          }

        return (valA < valB ? -1 : 1) * (event.asc ? 1 : -1);
      }
    });
  }
}
