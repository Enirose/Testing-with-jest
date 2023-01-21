import { wait } from "./es6";
test ("It resolves with 'abc' value after 1 second", async ()=> {
    const start = Date.now()
    const data = await wait(1000, "abc");
    expect(data).toEqual("abc");
    const end = date.now()
    expect(end-start).toBeGreaterThanOrEqual(1000)
})