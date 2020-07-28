var User     = require('./models/User'),
    mongoose = require('mongoose'),
    done = 0,
    users = [
        new User({
            name: 'bjh1',
            gender: 'Male',
            email: 'hbh@hbh.com',
            password: 'hbhhbh',
            age: 25,
            rollno: 40,
            sid: 'f330caa1-f837-4782-a9cb',
            startDate: '7-15-2020'
        }),
        new User({
            name: 'lol',
            gender: 'Male',
            email: 'lol@dfs.com',
            password: 'loldfs',
            age: 12,
            rollno: 20,
            sid: '6eec500b-de5b-4d50-9c66-6d1573d03b81',
            startDate: '7-7-2020'
        }),
        new User({
            name: 'xyz',
            gender: 'Female',
            email: 'qq@gmail.com',
            password: 'qqxyz',
            age: 12,
            rollno: 20,
            sid: 'c22e3374-a3f0-4134-9e66-83f8d37161eb',
            startDate: '7-1-2020'
        }),
        new User({
            name: 'snehil',
            gender: 'Male',
            email: 'snehil@gmail.com',
            password: 'snehil',
            age: 12,
            rollno: 12,
            sid: '7100a4b1-27eo-4174-92c1-e27061484b14',
            startDate: '12-12-2020'
        }),
        new User({
            name: '7hyt',
            gender: 'Male',
            email: 'rgt@t6t5.com',
            password: 'hbhhbh',
            age: 3,
            rollno: 4,
            sid: '91ea62ed-d6c3-4fd2-adaf-ed60de88f04e',
            startDate: '7-29-2020'
        })
    ];
mongoose.connect(process.env.MONGO_URI , { 
    useUnifiedTopology : true, 
    useNewUrlParser: true, 
    useFindAndModify: true,
    useCreateIndex: true
});
for (var i = 0; i < users.length; i++) {
    users[i].save(function(err, result) {
        done++;
        if(done == users.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}