/**     Online status
 * Display online status for a list of users.
 * Example:
 * `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return
 * `'mockIng99, J0eyPunch and 1 more online'`.
 * 
 * requisitos: 
 * [] imprimir user == 1
 * [] imprimir primeras 2 personas users == 2
 * [] imprimir primeras 2 personas + conteo users >=2
 */

const users = ["mockIng99", "J0eyPunch", "glassedFer", "roberto"];

function displayUsers(arr) {
    const count = users.length;
    let res;
    if (count == 1){
        res = `${arr[0]} is online`;
    } else if (count === 2) {
        res = `${arr[0]}, ${arr[1]} are online `;
    } else {
        res = `${arr[0]}, ${arr[1]} and ${count - 2} more are online`; // muestra el total -2 de los usuarios en
    }
    return res;
}

console.log(displayUsers(users));