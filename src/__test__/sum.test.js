import { sum } from "../components/sum"

test("Sum function should return addition of two numbers", () => {
    const res = sum(3, 5);

    expect(res).toBe(8);
})