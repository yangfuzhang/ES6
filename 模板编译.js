let template = "My name is {{ name }}, I am {{ age }}"
let data = {name: "James", age: "15"}

function render(template, data) {
    return template.replace(/{{(.*?)}}/g, function(match, key) {
    	console.log(match)
    	console.log(key)
        return data[key.trim()]
    })
}

render(template, data)