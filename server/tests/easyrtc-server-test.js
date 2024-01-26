const request = require('supertest');
const express = require('express');
const app = require('../easyrtc-server');

describe('Pruebas unitarias para el servidor EasyRTC', () => {
  test('Debería responder al método GET en la raíz', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('Debería manejar rutas no existentes con un error 404', async () => {
    const response = await request(app).get('/ruta-no-existente');
    expect(response.statusCode).toBe(404);
  });

  // Suponiendo que hay una funcionalidad para unirse a una sala
  test('Debería permitir unirse a una sala existente', async () => {
    const response = await request(app).post('/unirse-sala').send({ nombreSala: 'salaExistente' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('mensaje', 'Unido a salaExistente');
  });

  test('No debería permitir unirse a una sala sin enviar el nombre de la sala', async () => {
    const response = await request(app).post('/unirse-sala').send({});
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'Se requiere el nombre de la sala para unirse');
  });

  // Suponiendo que hay una funcionalidad para enviar mensajes en una sala
  test('Debería permitir enviar un mensaje en una sala', async () => {
    const response = await request(app).post('/enviar-mensaje').send({ nombreSala: 'salaExistente', mensaje: 'Hola a todos' });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('mensaje', 'Mensaje enviado');
  });

  test('No debería permitir enviar un mensaje vacío', async () => {
    const response = await request(app).post('/enviar-mensaje').send({ nombreSala: 'salaExistente', mensaje: '' });
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error', 'No se puede enviar un mensaje vacío');
  });

});

