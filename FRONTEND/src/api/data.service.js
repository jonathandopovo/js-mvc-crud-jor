const dataService = {
  load: async () => {
    try {
      const response = await fetch("http://localhost:8071/api/data");
      const obj = await response.json();
      return obj;
    } catch (error) {
      console.error(`Deu erro aí ô: ${error}`);
      return [];
    }
  },
  save: async (novosDados) => {
    try {
      const response = await fetch("http://localhost:8071/api/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novosDados),
      });
      const retorno = await response.json();
      console.log("Dados foram salvos com sucesso", retorno);
      return retorno;
    } catch (error) {
      console.error("Erro ao salvar os dados", error);
      return { error: "Não foi possível salvar os dados" };
    }
  },
};

export { dataService };
