import { test, expect } from '@playwright/test';
import Ajv from "ajv"
import { airPollution, forecast, reverseGeo, searchGeo } from '../../schema/weather_app';
  const query = "London";

test('Search query API Testing',{tag:["@API"], annotation:{type:"API", description:"Reverse Geo API Testing"}}, async ({ request }) => {

  let url = process.env.Base_URL
  let response = await request.get(`${process.env.Base_URL}/geo/1.0/direct?q=${query}&limit=5&units=metric&appid=${process.env.API_KEY}`);
  expect.soft(response).toBeOK();
  expect.soft(response.status()).toBe(200)
  const ajv = new Ajv() 
  const validate = ajv.compile(searchGeo)
  const valid = validate(JSON.parse((await response.body()).toString()))
  if (!valid) console.log(validate.errors)
  expect(valid).toBeTruthy();

  console.log( ((await response.body()).toString()))
  console.log(await response.json());
  console.log(await response.status())
  
});

