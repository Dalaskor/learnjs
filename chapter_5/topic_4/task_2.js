let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
const middleInx = Math.floor((styles.length - 1) / 2);
styles[middleInx] = "Классика";
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
