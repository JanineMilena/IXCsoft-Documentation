import webservice from '../webserviceClient.js';

class InterfaceService {
    async dataMenu() {
        const response = await webservice("get-menu-by-projeto-e-sub-projeto", "POST", { "id-sub-projeto": "5", "id-projeto": "5" });
        if (response.result) {
            const menus = [];
            for (const index1 in response.result.tree) {
                let submenus = [];
                submenus.push({
                    "menu": response.result.tree[index1].dados.nome
                });
                for (const index2 in response.result.tree[index1].childs) {
                    if (response.result.tree[index1].childs[index2].dados.subpasta == "N") {
                        submenus.push({
                            "submenu": response.result.tree[index1].childs[index2].dados.nome,
                            "submenu-pasta": response.result.tree[index1].childs[index2].dados.subpasta,
                            "submenu-form": response.result.tree[index1].childs[index2].dados.form
                        });
                    } else {
                        submenus.push({
                            "submenu": response.result.tree[index1].childs[index2].dados.nome,
                            "submenu-pasta": response.result.tree[index1].childs[index2].dados.subpasta
                        });
                    }
                }
                menus.push(submenus);
            }
            return ({
                status: 200,
                message: "Success!",
                data: menus
            });
        }
        return ({
            status: 500,
            message: "An error has occurred.",
        });
    }
}

export default InterfaceService;
