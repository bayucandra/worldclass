const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req:any, res: any) {
    // switch the methods
    // switch (req.method) {
    //     case 'POST': {
            return addUser(req, res);
    //     }
    // }
}



// Adding a new user
async function addUser(req: any, res: { json: (arg0: { message: string; success?: boolean; }) => void; }) {

    const { userMail } = req.query;

    try {
       
        let { db } = await connectToDatabase();
        let users = await db
            .collection('data_users')
            .findOne({email: userMail});
            // .sort({ published: -1 })
            // .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(users)),
            success: true,
        });
    } catch (error) {
        return res.json({
            success: false,
            message: ""
        });
    }
    

}

