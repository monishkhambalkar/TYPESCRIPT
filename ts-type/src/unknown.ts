let input: unknown = "This is unknown";
let value: unknown = 42;
let resultUnknown: unknown = true;
let user: unknown = { name: "User" };
let apiData: unknown = [1, 2, 3];
let tempUnknown: unknown = null;
let id: unknown = "1234";
let flag: unknown = false;
let infoUnknown: unknown = { key: "value" };
let settings: unknown = "Dark Mode";

// ✅ Type checking before using
if (typeof value === "number") {
  console.log("Square:", value * value);
}
