import { render, screen } from "../../../test-utils";
import { server } from "../../../mocks/server";
import Type from "../Type";
import { http } from "msw";

test("displays product images from server", async () => {
  render(<Type orderType="products" />);

  // 이미지 찾기
  const productImages = await screen.findAllByRole("img", {
    name: /product$/i,
  });
  expect(productImages).toHaveLength(2);

  const altText = productImages.map((element) => element.alt);
  expect(altText).toEqual(["America product", "England product"]);
});

test("fetch option information from server", async () => {
  render(<Type orderType="options" />);

  // 체크박스 가져오기
  const optionCheckboxes = await screen.findAllByRole("checkbox");

  expect(optionCheckboxes).toHaveLength(2);
});

test("when fetching product datas, face an error", async () => {
  server.resetHandlers(
    http.get("http://localhost:5001/products", () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<Type orderType="products" />);

  const errorBanner = await screen.findByTestId("error-banner");
  expect(errorBanner).toHaveTextContent("에러가 발생했습니다.")
});
