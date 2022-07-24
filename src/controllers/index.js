import { v4 as uuidv4 } from 'uuid';

const clients = [];

export default {
  post_controller(request, response) {
    const { name, phone } = request.body;
  
    const client = {
      id: uuidv4(),
      name,
      phone,
    }
    
    clients.push(client);
    
  
    response.status(201).json(clients);
    console.log(`ID inserido com sucesso ${client.id}`);
  },

  get_controller(request, response) {
    response.status(200).json(clients);
  },

  put_controller(request, response) {
    const { id } = request.body;
    const nome = request.body.name;
  
    let client = clients.find(value => value.id == id);
    
    if(client == undefined) {
      response.status(400).send();
    } else {
      client.name = nome;
  
      response.status(200).json(client);
    }
  },

  delete_controller(request, response) {
    const { id } = request.params;
    const index = clients.find(value => value.id == id);
  
    if (index == -1) {
      response.status(400).send();
    } else {
      clients.splice(index, 1);
      response.status(204).send();
    }
  }

}