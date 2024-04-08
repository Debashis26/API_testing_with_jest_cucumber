import { loadFeature, defineFeature } from 'jest-cucumber';
import axios, { AxiosResponse } from 'axios';
const feature = loadFeature('src/features/getTodos.feature');

defineFeature(feature, (test) => {
  

 

  test("Get the todo's" , ({ given, when, then }) => {
    let response:AxiosResponse;
    let base_url:string;
    given('I have the base_url',async () => {
      base_url="";
    });

    when('I send get request',async () => {
      response=await axios.get("https://jsonplaceholder.typicode.com/todos");
    });

    then('I should get 200 response', () => {
        expect(response.status).toBe(200);
    });
  });
});