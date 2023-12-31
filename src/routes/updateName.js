const dogRegistryDAO = require('../dao/dogRegistryDAO');

module.exports = async (req, res) => {
    console.log('Entered updateName route');
    try {
        const { oldName, newName } = req.body;

        if (!oldName) {
            throw new Error('Missing required parameter: oldName');
        }

        if (!newName) {
            throw new Error('Missing required parameter: newName');
        }

        await dogRegistryDAO.deleteName(oldName);

        await dogRegistryDAO.addName(newName);

        res.json({ message: 'Dog name updated successfully' });
    } catch (error) {
        console.error('Error updated name:', error);
        res.status(500).json({ error: 'Error updating dog name' });
    }
};
