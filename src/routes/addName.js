const dogRegistryDAO = require('../dao/dogRegistryDAO');

module.exports = async (req, res) => {
    console.log('Entered addName route');
    try {
        await dogRegistryDAO.addName(req.body.name);

        res.json({ message: 'Dog name added successfully' });
    } catch (error) {
        console.error('Error adding name:', error);
        res.status(500).json({ error: 'Error adding dog name' });
    }
};
