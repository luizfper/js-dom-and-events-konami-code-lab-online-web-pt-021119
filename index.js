const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListener('keydown', onKeyDown)
}

let index = 0

function onKeyDown(e){
	if (e.which === code[index]){
		index +=1
		if (index === code.length){
			alert("Yabadabadoo")
			index = 0
		}
	} else{
		index = 0
	}
}
