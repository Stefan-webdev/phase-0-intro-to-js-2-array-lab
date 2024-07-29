// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    return cats.push(name)

}
function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    return cats.splice(-1, 1)
    
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0, 1)
}

function  appendCat(name) {
   let newCats = cats.slice()
   newCats.push(name) 
   return newCats
}

function  prependCat(name) {
    let addCat = cats.slice()
    addCat.unshift(name)
    return addCat
}

function removeLastCat() {
    let removeCat = cats.slice()
    removeCat.pop()
    return removeCat
}
function  removeFirstCat() {
    return cats.slice(1, 10)
}