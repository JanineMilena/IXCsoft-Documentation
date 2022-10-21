import webservice from '../clientWebService.js';

class InterfaceService {
    async dataMenu() {
        const response = await webservice("/get-menu-by-projeto-e-sub-projeto", "POST", { "id-sub-projeto": "5", "id-projeto": "5" });
        if (response.result) {
            const menus = [];
            for (const index1 in response.result.tree) {
                let submenus = [];
                submenus.push({
                    "menu": response.result.tree[index1].dados.nome
                });

                // Para cada registro dos submenus
                for (const index2 in response.result.tree[index1].childs) {
                    if (response.result.tree[index1].childs[index2].dados.subpasta == "N") {
                        // Se o submenu não é uma pasta
                        submenus.push({
                            "submenu": response.result.tree[index1].childs[index2].dados.nome,
                            "submenu-pasta": response.result.tree[index1].childs[index2].dados.subpasta,
                            "submenu-form": response.result.tree[index1].childs[index2].dados.form
                        });
                    } else {
                        // Se o submenu for uma pasta
                        submenus.push({
                            "submenu": response.result.tree[index1].childs[index2].dados.nome,
                            "submenu-pasta": response.result.tree[index1].childs[index2].dados.subpasta
                        });
                    }
                }
                // Insere os submenus abaixo do array menu
                menus.push(submenus);
            }

            // Retorne sucesso
            return ({
                status: 200,
                message: "Success!",
                data: menus
            });
        }

        // Retorne erro
        return ({
            status: 500,
            message: "An error has occurred.",
        });
    }
}

// Exportando a classe
export default InterfaceService;
