const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return getUsers(req, res);
        }

        case 'POST': {
            return addUser(req, res);
        }

        case 'PUT': {
            return updateUser(req, res);
        }

        case 'DELETE': {
            return deleteUser(req, res);
        }
    }
}

// Getting all users.
async function getUsers(req, res) {

    try {
        let { db } = await connectToDatabase();
        let users = await db
            .collection('data_users')
            .find({})
            .sort({ published: -1 })
            .toArray();
        return res.json({
            message: JSON.parse(JSON.stringify(users)),
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }

}

// Adding a new user
async function addUser(req, res) {
    

    try {
        let { db } = await connectToDatabase();
        await db.collection('data_users').insertOne(req.body);
        return res.json({
            message: 'User added successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }

}

// Updating a user
async function updateUser(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('data_users').updateOne(
            {
                _id: new ObjectId(req.body),
            },
            { $set: { published: true } }
        );

        return res.json({
            message: 'User updated successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

// deleting a user
async function deleteUser(req, res) {
    try {
        let { db } = await connectToDatabase();

        await db.collection('data_users').deleteOne({
            _id: new ObjectId(req.body),
        });

        return res.json({
            message: 'User deleted successfully',
            success: true,
        });
    } catch (error) {
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}