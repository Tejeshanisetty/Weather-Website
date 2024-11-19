import { test, expect } from '@playwright/test';
import Ajv from "ajv"
import { airPollution, forecast, reverseGeo } from '../../schema/weather_app';
  const lat = "12.972055"
  const lon = "77.7164966"

test('Reverse Geo API Testing',{tag:["@API"], annotation:{type:"API", description:"Reverse Geo API Testing"}}, async ({ request }) => {

  let url = process.env.Base_URL
  let response = await request.get(`${process.env.Base_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&units=metric&appid=${process.env.API_KEY}`);

  expect.soft(response).toBeOK();
  expect.soft(response.status()).toBe(200)
  const ajv = new Ajv() 
  const validate = ajv.compile(reverseGeo)
  const valid = validate(JSON.parse((await response.body()).toString()))
  if (!valid) console.log(validate.errors)
  expect(valid).toBeTruthy();

  console.log( ((await response.body()).toString()))
  console.log(await response.json());
  console.log(await response.status())
  
});

