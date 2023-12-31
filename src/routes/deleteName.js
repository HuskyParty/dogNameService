const dogRegistryDAO = require('../dao/dogRegistryDAO');

module.exports = async (req, res) => {
    console.log('Entered deleteName route');
    try {
        const { name } = req.query;

        if (!name) {
            throw new Error('Missing required parameter: name');
        }

        await dogRegistryDAO.deleteName(name);

        res.json({ message: 'Dog name deleted successfully' });
    } catch (error) {
        console.error('Error deleting name:', error);
        res.status(500).json({ error: 'Error deleting dog name' });
    }
};
