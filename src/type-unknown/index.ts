// funciona como um any só que mais seguro
//Obriga a checagem do tipo sempreque fizer uma operação com ela

let X: unknown;

X = 100;
X = 'Luiz';
X = 10;
X = 800;

const y = 800;

if (typeof X === 'number') console.log(X * y);
