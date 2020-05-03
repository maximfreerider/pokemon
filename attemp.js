/*
 ф-ція attempt примає 3 аргументи
 - 'available' - масив наявних значень
 - 'allowed' - масив дозволених значень
 - 'preferred' - масив бажаних значень
 ф-ція attempt - повертає список значень, які задовольняють умови запиту
*/
const available = [ 240, 360, 720];
const allowed = [360, 720];
const preferred = [1080];

function attempt(available, allowed, preferred) {
    let arr = [];
    for (let prefer = 0; prefer < preferred.length; prefer++) {
        if (allowed.includes(preferred[prefer]) && available.includes(preferred[prefer])) {
            arr.push(preferred[prefer]);
            for (let allow = 0; allow < allowed.length; allow++) {
                for (let avail = 0; avail < available.length; avail++) {
                    
                }
            }
        }
    }
    return arr
}

console.log(attempt(available, allowed, preferred));