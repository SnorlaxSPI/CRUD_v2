import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

const clients = [];

const prisma = new PrismaClient();

export default {
  async post_controller(request, response) {

    const { name, phone } = request.body;

    let user = await prisma.user.findFirst({ where: { phone } });

    if (user) {
      return response.json({ error: 'Já existe um usuário com este telefone'});
    }

    user = await prisma.user.create({
      data: {
        id: uuidv4(),
        name, 
        phone,
      },
    });

  response.status(201).json(user);
  console.log(`ID inserido com sucesso ${user.id}`);
},

  async get_controller(request, response) {
    const user = await prisma.user.find({ phone });

    response.status(200).json(user);
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
