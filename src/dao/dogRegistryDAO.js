const ddbClient = require('../db/dynamodb');

class dogRegistryDAO {
    async listAllNames() {
        console.log('Entered dogRegistryDAO listAllNames method');
        const params = {
            TableName: 'dogNames',
        };
        return new Promise((resolve, reject) => {
            ddbClient.scan(params, (err, data) => {
                if (err) {
                    console.error(
                        'Error reading from DynamoDB:',
                        JSON.stringify(err, null, 2),
                    );
                } else {
                    console.log(
                        'DynamoDB call success:',
                        JSON.stringify(data, null, 2),
                    );
                    resolve(data.Items || []);
                }
            });
        });
    }

    async addName(name) {
        console.log(
            'Entered dogRegistryDAO addName method, with request to add name: ',
            name,
        );
        const params = {
            TableName: 'dogNames',
            Item: {
                name: name,
            },
        };

        ddbClient.put(params, (err, data) => {
            if (err) {
                console.error('Error adding name:', err);
            } else {
                console.log('Name added successfully:', data);
            }
        });
    }

    async deleteName(name) {
        console.log(
            'Entered dogRegistryDAO deleteName method, with request to delete name: ',
            name,
        );
        const params = {
            TableName: 'dogNames',
            Key: {
                name: name,
            },
        };
        return new Promise((resolve, reject) => {
            ddbClient.delete(params, (err, data) => {
                if (err) {
                    console.error('Error deleting name:', err);
                    reject(err);
                } else {
                    console.log('Name deleted successfully');
                    resolve(data);
                }
            });
        });
    }
}

module.exports = new dogRegistryDAO();
