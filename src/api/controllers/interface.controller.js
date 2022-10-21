import InterfaceService from '../services/interface.service.js';

const service = new InterfaceService();

class InterfaceController {
    async getDataMenu(req, res) {
        const response = await service.dataMenu();
        console.log(response.status);
        return res.status(response.status).json(response.data);
    }
}

const dataRenderInterface = new InterfaceController();

export default dataRenderInterface;
