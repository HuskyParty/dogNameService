const dogRegistryDAO = require('../dao/dogRegistryDAO');

module.exports = async (req, res) => {
    console.log('Entered listNames route');
    try {
        const result = await dogRegistryDAO.listAllNames();
        const names = result.map((item) => item.name);
        res.json({ names });
    } catch (error) {
        console.error('Error fetching names:', error);
        res.status(500).json({ error: 'Error fetching dog names' });
    }
};
