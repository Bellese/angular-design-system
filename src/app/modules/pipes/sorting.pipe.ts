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
    if (event) {
        this.colHeader = (event.name) ? event.id : event.e.target.id;
    }

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
            valA = '-1'
          }

          if(valB.toLowerCase() === 'n/a') {
            valB = '-1'
          }
          
          let re = /^\d/;
          let rep = /\D/g;
          
          if(valA.match(re)) {
              valA = Number(valA.replace(rep, ""));
          }
          
          if(valB.match(re)) {
              valB = Number(valB.replace(rep, ""));
          }

        return (valA < valB ? -1 : 1) * (event.asc ? 1 : -1);
      }
    });
  }
}
