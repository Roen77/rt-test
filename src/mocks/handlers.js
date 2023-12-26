import { http, delay, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:5001/products", () => {
    return HttpResponse.json([
      {
        name: "America",
        imagePath: "/images/america.jpeg",
      },
      {
        name: "England",
        imagePath: "/images/england.jpeg",
      },
    ])
  })
  ,
  http.get("http://localhost:5001/options", () => {
    return HttpResponse.json([
      {
        name: "Insurance",
      },
      {
        name: "Dinner",
      },
    ])
  }),
  http.post("http://localhost:5001/order", async () => {
    let dummyData = [{ orderNumber: 2131234324, price: 2000 }];
    await delay(100);
    return HttpResponse.json(dummyData);
  }),
];
