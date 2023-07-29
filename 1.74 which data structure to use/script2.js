const obj = { name: "morreti's", location: "italy", rating: "5 star" }
const map = new Map([
    ["name", "morreti's"],
    ["location", "italy"],
    ['rating', "5 star"]
])
const map2 = new Map(Object.entries(obj))

console.log("map  = ", map)
console.log("obj  = ", obj)
console.log("map2 = ", map2)

console.log("", obj.name)
console.log("", map.get("name"))

obj.owner = "michele"
console.log("obj.owner = \"michele\"", obj)
map.set("owner", "michele")
console.log("map.set(\"owner\", \"michele\")", map)