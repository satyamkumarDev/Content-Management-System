import bcrypt from 'bcryptjs';

const data={
    users:[

       {
            name:'Admin',
            email:'admin@gmail.com',
            password:bcrypt.hashSync('123456',8),
            isAdmin:true,

        },
        { 
            name:'satyam kumar',
            email:'satyamvatsk@gmail.com',
            password:bcrypt.hashSync('123456',8),
            isAdmin:false,

        }
    ]
}

export default data