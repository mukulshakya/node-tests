module.exports.add = (a,b) => a+b;

module.exports.square = c => c*c;

module.exports.setName = (user, fullName) => {
    var name = fullName.split(' ');
    user.firstName = name[0];
    user.lastName = name[1];
};

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    },1000)
};

module.exports.asyncSquare = (x, callback) => {
    setTimeout(() => {
        callback(x*x);
    }, 1000);
};