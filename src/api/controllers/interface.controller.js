const { InterfaceService } = require("../services/interface.service.js");

const service = new InterfaceService();

class InterfaceController {
    async getDataMenu(req, res) {
        const response = await service.dataMenu();
        return res.status(response.status).json(response.data);
    }
}

const dataRenderInterface = new InterfaceController();

module.exports = { dataRenderInterface };
