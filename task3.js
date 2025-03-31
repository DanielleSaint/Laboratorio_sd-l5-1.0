// 3. Ed would like a way to calculate an age from a given birth date.
//  Export a function that will take 3 arguments - a **year**, a **month**, and a **day** - then return an accurate age.
//  For example, `ageCalculator(2000, 12, 25)` should return the age of someone born on Christmas Day, 2000.

export function ageCalculator(year,month,day) {
    let fecha = new Date();
    let actualYear = fecha.getFullYear();
    let actualMonth = fecha.getMonth()+1;
    let actualDay = fecha.getDate();
    let ageYear = actualYear - year;
    let ageMonth = actualMonth - month;
    let ageDay = actualDay - day;
    if (ageMonth < 0) {
        ageYear --;
        ageMonth += 12;
    }
    if (ageDay < 0) {
        ageMonth --;
        let lastDays = new Date(actualYear, actualMonth - 1, 0).getDate();
        ageDay += lastDays;
    }
    console.log(`Su edad es: ${ageYear} años, ${ageMonth} meses, ${ageDay} dias`);
        
}

ageCalculator(1994,3,31);
