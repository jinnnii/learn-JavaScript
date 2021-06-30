class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id)
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }
    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
    //homework 🏠
    async getUserWithRole(user, pass) {
        const id = await userStorage.loginUser(user, pass);
        const role = await userStorage.getRoles(id);
        return role;
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pass = prompt('enter your password');

userStorage
    .loginUser(id, pass)
    .then(userStorage.getRoles)
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

userStorage
    .getUserWithRole(id, pass)
    .catch(console.log)
    .then(console.log);
